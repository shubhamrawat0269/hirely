const express = require('express')
const router = express.Router()

const { userMiddleware } = require('../middleware')
const { applicationController } = require('../controllers')

router.get('/apply-job/:id', userMiddleware.isAuthenticated, applicationController.applyJob)
router.post(
  '/update-status/:id',
  userMiddleware.isAuthenticated,
  applicationController.updateStatus
)
router.get(
  '/applicants/:id',
  userMiddleware.isAuthenticated,
  applicationController.getApplicants
)
router.get(
  '/get-applied-jobs',
  userMiddleware.isAuthenticated,
  applicationController.getAppliedJobs
)

module.exports = router
