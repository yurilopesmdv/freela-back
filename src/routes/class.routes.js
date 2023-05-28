import {Router} from 'express'
import { getClasses } from '../controllers/class.controller.js'

const classRouter = Router ()

classRouter.get('/classes', getClasses)

export default classRouter