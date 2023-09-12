const express = require('express');
const router = express.Router();

const {
  createTeacher,
  getTeachers,
  getTeacher,
  updateTeacher,
  deleteTeacher,
} = require('../controllers/teacher.controller');

router.route('/').get(getTeachers).post(createTeacher);

router.route('/:id').get(getTeacher).patch(updateTeacher).delete(deleteTeacher);

module.exports = router;
