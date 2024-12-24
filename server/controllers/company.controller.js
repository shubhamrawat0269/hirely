const CompanyModal = require('../models/company.model')
const { createResponse } = require('../utils/common.util.js')

const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body

    if (!companyName) {
      const response = createResponse(400, 'Company name is required', false)
      res.status(response.status).json(response.json)
    }

    let company = await CompanyModal.findOne({ name: companyName })

    if (company) {
      const response = createResponse(
        400,
        'You cannot register same company.',
        false
      )
      res.status(response.status).json(response.json)
    }

    company = await CompanyModal.create({
      name: companyName,
      userId: req.id,
    })

    const response = createResponse(
      201,
      'Company registered successfully.',
      true,
      company
    )
    res.status(response.status).json(response.json)
  } catch (error) {
    console.log('COMPANY REGISTER ', error)
  }
}

const getCompanies = async (req, res) => {
  try {
    const userId = req.id
    const companies = await CompanyModal.find({ userId })
    if (!companies) {
      const response = createResponse(404, 'Companies not found', false)
      res.status(response.status).json(response.json)
    }
    const response = createResponse(200, '', true, companies)
    res.status(response.status).json(response.json)
  } catch (error) {
    console.log('COMPANY GET ', error)
  }
}

const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id
    console.log(companyId, 'COMPANY ID ++++')
    const company = await CompanyModal.findById({ _id: companyId })

    console.log(company, 'COMPANY DETAILS ++++')
    if (!company) {
      const response = createResponse(404, 'Company not found.', false)
      return res.status(response.status).json(response.json)
    }
    const response = createResponse(200, '', true, company)
    return res.status(response.status).json(response.json)
  } catch (error) {
    console.log('GET COMPANY BY ID ', error)
  }
}

const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body
    const file = req.file
    // cloudinary setup

    const updateData = { name, description, website, location }

    const company = await CompanyModal.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
      }
    )

    if (!company) {
      const response = createResponse(404, 'Company not found.', false)
      res.status(response.status).json(response.json)
    }

    const response = createResponse(200, 'Company information updated.', true)
    res.status(response.status).json(response.json)
  } catch (error) {
    console.log('COMPANY GET ', error)
  }
}

module.exports = {
  getCompanies,
  updateCompany,
  getCompanyById,
  registerCompany,
}
