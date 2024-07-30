import { Router } from 'express'
import { tipController } from '../controllers/tipController.js'
import { schemaValidator } from '../middlewares/validations.js'
import { bodyTipSchema, updateTipSchema, idTipSchema } from '../schemas/tipSchemas.js'

export const tipRoutes = () => {
    const tipRouter = Router()
    const { getTips, createTip, getTipById, deleteById, updateById } = tipController()
    
    tipRouter.route('/tips')
        .get(getTips)
        .post(schemaValidator(bodyTipSchema), createTip)

    tipRouter.route('/tips/:id')
        .get(schemaValidator(idTipSchema), getTipById)
        .delete(schemaValidator(idTipSchema), deleteById)
        .patch(schemaValidator(updateTipSchema), updateById)
 
    return tipRouter
}