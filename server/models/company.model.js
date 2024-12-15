const mongoose = require("mongoose");
const companySchema = require("../schema/company.schema.js");

const CompanyModal = mongoose.model("Company", companySchema);

module.exports = CompanyModal;