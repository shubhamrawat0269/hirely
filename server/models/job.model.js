const mongoose = require('mongoose')
const jobSchema = require('../schema/job.shema')

const JobModal = mongoose.model('Job', jobSchema)

module.exports = JobModal
