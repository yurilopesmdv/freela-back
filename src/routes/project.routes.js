import {Router} from 'express'

const projectRouter = Router ()

projectRouter.post("/projects")
projectRouter.get("/projects")

export default projectRouter