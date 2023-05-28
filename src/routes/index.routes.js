import {Router} from 'express'
import studentRouter from './student.routes.js'
import projectRouter from './project.routes.js'
import classRouter from './class.routes.js'

const router = Router()

router.use(studentRouter)
router.use(projectRouter)
router.use(classRouter)

export default router