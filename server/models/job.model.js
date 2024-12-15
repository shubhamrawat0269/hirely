const mongoose = require("mongoose");
const jobSchema = require("../schema/job.schema.js");

const JobModal = mongoose.model("Job", jobSchema);

module.exports = JobModal;