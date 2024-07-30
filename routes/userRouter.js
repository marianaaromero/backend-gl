import { Router } from 'express'
import { userController } from '../controllers/userController.js'

export const userRoutes = () => {
    const userRouter = Router()
    const { register, login, profile, refreshToken } = userController()
    
    userRouter.route('/register')
        .post(register)

    userRouter.route('/login')
        .post(login)

    userRouter.route('/profile/:id')
        .get(profile)
        
    userRouter.route('/refresh-token')
        .post(refreshToken)

    return userRouter
}
