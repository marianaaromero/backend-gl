import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import { expressjwt as ejwt } from 'express-jwt'
import { strokeRoutes } from './routes/strokeRouter.js'
import { routineRoutes } from './routes/routineRouter.js'
import { userRoutes } from './routes/userRouter.js'
import { tipRoutes } from './routes/tipRouter.js';
import { favRoutineRoutes } from './routes/favRoutineRouter.js'
import { favTipRoutes } from './routes/favTipRouter.js'
import errorHandler from './middlewares/errorHandler.js';

dotenv.config()

//* http://localhost:3000/

const SERVER_PORT = process.env.SERVER_PORT || 3001

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE'
}))

app.use(ejwt({
    secret: process.env.SECRET_KEY,
    algorithms: ['HS256'],
}).unless({
    path: ['/api/login', '/api/register', '/api/refresh-token', '/api/strokes'],
})) 

app.use('/api', strokeRoutes(), routineRoutes(), userRoutes(), favRoutineRoutes(), tipRoutes(), favTipRoutes())
app.use(errorHandler)

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`)
})


