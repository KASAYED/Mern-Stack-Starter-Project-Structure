const express = require('express')
const StudentsController = require('../controllers/studentsController')

const router = express.Router()

// Apply JWT Auth

router.post(
  '/InsertStudent',

  StudentsController.InsertStudent
)
router.get(
  '/ReadStudent',

  StudentsController.ReadStudent
)
router.post(
  '/UpdateStudent/:id',

  StudentsController.UpdateStudent
)
router.get(
  '/DeleteStudent/:id',

  StudentsController.DeleteStudent
)

module.exports = router
