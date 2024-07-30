import { Router } from 'express'
import { strokeController } from '../controllers/strokeController.js'//importo controladores

export const strokeRoutes = () => {
    const strokeRouter = Router()
    const { getStrokes } = strokeController()
    const { getStrokeById } = strokeController()
    
    strokeRouter.route('/strokes')
        .get(getStrokes)

    strokeRouter.route('/strokes/:id')
        .get(getStrokeById)
 
    return strokeRouter
}

