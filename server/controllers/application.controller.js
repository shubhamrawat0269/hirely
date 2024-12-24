const JobModal = require('../models/job.model')
const ApplicationModal = require('../models/application.model.js')

const { createResponse } = require('../utils/common.util.js')

const applyJob = async (req, res) => {
  try {
    const userId = req.id
    const jobId = req.params.id

    if (!jobId) {
      const response = createResponse(400, 'Jobs id is required.', false)
      return res.status(response.status).json(response.json)
    }

    /* check if the user has already applied for the job */
    const existingAppllication = await ApplicationModal.findOne({
      job: jobId,
      applicant: userId,
    })

    if (existingAppllication) {
      const response = createResponse(
        400,
        'You have already applied for this job.',
        false
      )
      return res.status(response.status).json(response.json)
    }

    const job = await JobModal.findById(jobId)
    if (!job) {
      const response = createResponse(400, 'Job not found.', false)
      return res.status(response.status).json(response.json)
    }

    const newApplication = await ApplicationModal.create({
      job: jobId,
      applicant: userId,
    })

    job.applications.push(newApplication._id)
    await job.save()

    const response = createResponse(201, 'Job applied successfully.', true)
    return res.status(response.status).json(response.json)
  } catch (error) {
    console.log('Apply JOB', error)
  }
}

const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id
    const application = await ApplicationModal.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: 'job',
        options: { sort: { createdAt: -1 } },
        populate: {
          path: 'company',
          options: { sort: { createdAt: -1 } },
        },
      })

    if (!application) {
      const response = createResponse(404, 'No Applications.', false)
      return res.status(response.status).json(response.json)
    }
    const response = createResponse(200, '', true, application)
    return res.status(response.status).json(response.json)
  } catch (error) {
    console.log('GET APPLIED JOBS ', error)
  }
}

const updateStatus = async (req, res) => {
  try {
    const { status } = req.body
    const applicationId = req.params.id

    if (!status) {
      const response = createResponse(400, 'status is required.', false)
      return res.status(response.status).json(response.json)
    }

    /* find the application by applicant id */
    const application = await ApplicationModal.findOne({ _id: applicationId })

    if (!application) {
      const response = createResponse(404, 'Application not found.', false)
      return res.status(response.status).json(response.json)
    }

    /* update the status */
    application.status = status.toLowerCase()
    await application.save()

    const response = createResponse(200, 'Status updated successfully', true)
    return res.status(response.status).json(response.json)
  } catch (error) {
    console.log('Status ', error)
  }
}

const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id
    const job = await JobModal.findById(jobId).populate({
      path: 'applications',
      options: { sort: { createdAt: -1 } },
      populate: {
        path: 'applicant',
      },
    })

    if (!job) {
      const response = createResponse(404, 'Job not found.', false)
      return res.status(response.status).json(response.json)
    }

    const response = createResponse(200, '', true, job)
    return res.status(response.status).json(response.json)
  } catch (error) {
    console.log('GET APPLICANTS ', error)
  }
}

module.exports = {
  applyJob,
  updateStatus,
  getApplicants,
  getAppliedJobs,
}
