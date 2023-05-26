import {Router} from 'express'
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { projectSchema } from '../schemas/project.schema.js'
import { getAllDeliveries, getDelieverieById, postProject } from '../controllers/project.controller.js'

const projectRouter = Router ()

projectRouter.post("/projects", validateSchema(projectSchema), postProject)
projectRouter.get("/deliveries", getAllDeliveries)
projectRouter.get("/deliveries/:id", getDelieverieById)

export default projectRouter