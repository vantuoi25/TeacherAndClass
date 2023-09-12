const Joi = reqiure('joi');

const schemaValidTeacher = Joi.object({
    teacher_id: Joi.string()
        .min(3)
        .max(20)
        .required(),

    full_name: Joi.string()
        .min(10)
        .max(30)
        .required(),
    
    gender: Joi.string()
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),

    phone: Joi.binary()
        .length(10)
        .required(),

    dob: Joi.number()
        .integer()
        .min(1990)
        .max(2005)
        .required(),
     
    description: Joi.string()
        .min(3)
        .max(10),
});

module.exports = (teacher) => schemaValidTeacher.validate(teacher);
