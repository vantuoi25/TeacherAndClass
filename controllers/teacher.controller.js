const teacherModel = require('../models/teacher.model');

module.exports = {
  createTeacher: async (req, res) => {
    const body = req.body;
    const newTeacher = await teacherModel.create(body);
    return res.status(201).json(newTeacher);
  },
  getTeachers: async (req, res) => {
    const getTeachers = await teacherModel.find();
    return res.status(200).json(getTeachers);
  },
  getTeacher: async (req, res) => {
    const id = req.params.id;
    const getTeacher = await teacherModel.find({
      _id: id,
    });
    return res.status(200).json(getTeacher);
  },
  updateTeacher: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const updateTeacher = await teacherModel.find(
      {
        _id: id,
      },
      body,
      { new: true },
    );
    return res.status(200).json(updateTeacher);
  },
  deleteTeacher: async (req, res) => {
    const id = req.params.id;
    const deleteTeacher = await teacherModel.findByIdAndDelete({
      _id: id,
    });
    return res.status(200).json(deleteTeacher);
  },
};
