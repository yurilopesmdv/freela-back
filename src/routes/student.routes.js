import { Router } from "express"

const studentRouter = Router ()

studentRouter.post("/students")
studentRouter.get("/students")
studentRouter.get("/students/:id")

export default studentRouter