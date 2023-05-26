import Joi from "joi"

export const createStudentSchema = Joi.object({
    name: Joi.string().required(),
    cpf: Joi.string().length(11).required(),
    email: Joi.string().email().required(),
    picture: Joi.string().uri().required(),
    class: Joi.number().integer().positive().required()
})
