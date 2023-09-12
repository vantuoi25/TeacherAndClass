const Joi = require('joi');

const schemaValidClass = Joi.object({
    class_id: Joi.number()
        .integer()
        .required(),
    name: Joi.string()
        .required(),
    lecture_schedule: Joi.string()
        .required(),
    opening_schedule: Joi.string()
        .required(),
    class_room: Joi.string()
        .required(),
    status: Joi.number()
        .integer()
        .required(),
    discription: Joi.string()
        .required(),
    teacher: Joi.string()
        .valid(Joi.in('teacher')),
});

module.exports = (class) => schemaValidClass.validate(class);