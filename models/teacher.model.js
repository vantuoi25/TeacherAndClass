const mongoose = require('mongoose');
const teacherSchema = mongoose.Schema(
  {
    teacher_id: {
      type: Number,
      unique: true,
      required: true,
    },
    full_name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    dob: {
      type: Number,
      required: true,
    },
    description: {
      type: String
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('teacher', teacherSchema);
