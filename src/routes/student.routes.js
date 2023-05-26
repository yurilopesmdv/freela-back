import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { createStudentSchema } from "../schemas/student.schema.js"
import { createStudent, getAllStudents, getStudentById } from "../controllers/student.controller.js"

const studentRouter = Router ()

studentRouter.post("/students", validateSchema(createStudentSchema), createStudent)
studentRouter.get("/students", getAllStudents)
studentRouter.get("/students/:id", getStudentById)

export default studentRouter