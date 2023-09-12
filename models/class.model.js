const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const classSchema = mongoose.Schema(
  {
    calsss_id: {
      type: Number,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lecture_schedule: {
      type: String,
      required: true,
    },
    opening_schedule: {
      type: Date,
      required: true,
    },
    class_room: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    teacher: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'teacher',
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('class', classSchema);
