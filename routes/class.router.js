const express = require('express');
const router = express.Router();

const {
  createClass,
  getClasses,
  getClass,
  updateClass,
  deleteClass,
} = require('../controllers/class.controller');

router.route('/').get(getClasses).post(createClass);

router.route('/:id').get(getClass).patch(updateClass).delete(deleteClass);

module.exports = router;
