import {Router} from 'express'
import studentRouter from './student.routes.js'
import projectRouter from './project.routes.js'

const router = Router()

router.use(studentRouter)
router.use(projectRouter)

export default router