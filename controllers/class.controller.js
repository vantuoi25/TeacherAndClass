const classModel = require('../models/class.model');

module.exports = {
  createClass: async (req, res) => {
    const body = req.body;
    const newClass = await classModel.create(body);
    return res.status(201).json(newClass);
  },
  getClasses: async (req, res) => {
    const classes = await classModel.find();
    return res.status(200).json(classes);
  },
  getClass: async (req, res) => {
    const id = req.params.id;
    const getClass = await classModel.find({
      _id: id,
    });
    return res.status(200).json(getClass);
  },
  updateClass: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const updateClass = await classModel.findOneAndUpdate(
      {
        _id: id,
      },
      body,
      { new: true },
    );
    return res.status(200).json(updateClass);
  },
  deleteClass: async (req, res) => {
    const id = req.params.id;
    const deleteClass = await classModel.findByIdAndDelete(id);
    return res.status(200).json(deleteClass);
  },
};
