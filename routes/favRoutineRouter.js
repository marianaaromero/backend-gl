import { Router } from 'express'
import { favRoutineController } from '../controllers/favRoutineController.js'

export const favRoutineRoutes = () => {
    const favRoutineRouter = Router()
    const { markAsFavorite, getAllFavoriteRoutines } = favRoutineController()
    
    favRoutineRouter.route('/routine-fav')
        .post(markAsFavorite)
        .get(getAllFavoriteRoutines)

    return favRoutineRouter
}
