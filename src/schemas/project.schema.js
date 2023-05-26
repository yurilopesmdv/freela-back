import Joi from "joi"

export const projectSchema = Joi.object({
    projectId: Joi.number().integer().positive().required(),
    classId: Joi.number().integer().positive().required(),
    projectUrl: Joi.string().uri().required(),
    userId: Joi.number().integer().positive().required()
})