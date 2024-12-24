const JobModal = require('../models/job.model.js')
const { createResponse } = require('../utils/common.util.js')

const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body
    const userId = req.id

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      const response = createResponse(400, 'Something is Missing', false)
      return res.status(response.status).json(response.json)
    }

    const job = await JobModal.create({
      title,
      description,
      requirements: requirements.split(','),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: experience,
      position,
      company: companyId,
      created_by: userId,
    })

    const response = createResponse(
      201,
      'New job created successfully.',
      true,
      job
    )
    return res.status(response.status).json(response.json)
  } catch (error) {
    console.log('POST JOB', error)
  }
}

const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || ''
    const query = {
      $or: [
        { title: { $regex: keyword, $options: 'i' } },
        { description: { $regex: keyword, $options: 'i' } },
      ],
    }
    const jobs = await JobModal.find(query)
      .populate({
        path: 'company',
      })
      .sort({ createdAt: -1 })
    if (!jobs) {
      const response = createResponse(404, 'Jobs not found', false)
      return res.status(response.status).json(response.json)
    }
    const response = createResponse(200, '', true, jobs)
    return res.status(response.status).json(response.json)
  } catch (error) {
    console.log('ALL JOBS GET ', error)
  }
}

const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id
    const job = await JobModal.findById(jobId)

    if (!job) {
      const response = createResponse(404, 'Jobs not found', false)
      return res.status(response.status).json(response.json)
    }
    const response = createResponse(200, '', true, job)
    return res.status(response.status).json(response.json)
  } catch (error) {
    console.log('GET JOB BY ID ', error)
  }
}

const getAdminJob = async (req, res) => {
  try {
    const adminId = req.id
    const jobs = await JobModal.find({ created_by: adminId })

    if (!jobs) {
      const response = createResponse(404, 'Jobs not found', false)
      return res.status(response.status).json(response.json)
    }
    const response = createResponse(200, '', true, jobs)
    return res.status(response.status).json(response.json)
  } catch (error) {
    console.log('GET JOB ADMIN ', error)
  }
}

module.exports = {
  postJob,
  getAllJobs,
  getJobById,
  getAdminJob,
}
