import { Router } from "express"

const studentRouter = Router ()

studentRouter.post("/students")
studentRouter.get("/students")
studentRouter.get("/student/:id")

export default studentRouter