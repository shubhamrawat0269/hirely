const express = require('express')
const router = express.Router()

const { userMiddleware } = require('../middleware')
const { companyController } = require('../controllers')

router.get('/', userMiddleware.isAuthenticated, companyController.getCompanies)
router.get(
  '/:id',
  userMiddleware.isAuthenticated,
  companyController.getCompanyById
)
router.post(
  '/register',
  userMiddleware.isAuthenticated,
  companyController.registerCompany
)
router.put(
  '/update/:id',
  userMiddleware.isAuthenticated,
  companyController.updateCompany
)

module.exports = router
