import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { createStudentSchema } from "../schemas/student.schema.js"

const studentRouter = Router ()

studentRouter.post("/students", validateSchema(createStudentSchema))
studentRouter.get("/students")
studentRouter.get("/students/:id")

export default studentRouter