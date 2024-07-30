import { Router } from 'express'
import { routineController } from '../controllers/routineController.js'
import { schemaValidator } from '../middlewares/validations.js'
import { bodyRoutineSchema, updateRoutineSchema, idRoutineSchema } from '../schemas/routineSchemas.js'

export const routineRoutes = () => {
    const routineRouter = Router()
    const { getRoutines, getRoutineById, createRoutine, deleteById, updateById } = routineController()
    
    routineRouter.route('/routines')
        .get(getRoutines)
        .post(schemaValidator(bodyRoutineSchema), createRoutine)

    routineRouter.route('/routines/:id')
        .get(schemaValidator(idRoutineSchema), getRoutineById)
        .delete(schemaValidator(idRoutineSchema), deleteById)
        .patch(schemaValidator(updateRoutineSchema), updateById)
 
    return routineRouter
}