const express = require('express')
const router = express.Router()

const { userMiddleware } = require('../middleware')
const { jobController } = require('../controllers')

router.get('/', userMiddleware.isAuthenticated, jobController.getAllJobs)
router.get(
  '/admin-job',
  userMiddleware.isAuthenticated,
  jobController.getAdminJob
)

router.get('/:id', userMiddleware.isAuthenticated, jobController.getJobById)
router.post('/post-job', userMiddleware.isAuthenticated, jobController.postJob)

module.exports = router
