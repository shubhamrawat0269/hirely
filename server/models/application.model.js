const mongoose = require("mongoose");
const applicationSchema = require("../schema/application.schema.js");

const ApplicationModal = mongoose.model("Application", applicationSchema);

module.exports = ApplicationModal;