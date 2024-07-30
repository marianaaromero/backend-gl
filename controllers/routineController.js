import httpStatus from '../helpers/httpStatus.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const routineController = (routines) => {
    const getRoutines = async (request, response, next) => {
        const { query } = request
        
        try {
            const routines = await prisma.routine.findMany({
                where: {
                    title: {
                        contains: query?.title ?? ''
                    }
                }
            })
        
            return response.status(httpStatus.OK).json(routines)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }   
    }

    const getRoutineById = async (request, response, next) => {
        const { id } = request.params
        const routineId = Number(id)

        try {
            const routine = await prisma.routine.findUnique({
                where: {
                    id: routineId
                }
            })
            const responseFormat = {
                data: routine,
            }
            return response.status(httpStatus.OK).json(responseFormat)
        
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const createRoutine = async (request, response, next) => {
        const newRoutine = request.body

        try {
            const createdRoutine = await prisma.routine.create({
                data: newRoutine
            })
            
            const responseFormat = {
                data: createdRoutine,
                message: 'Routine created successfully'
            }

            return response.status(httpStatus.CREATED).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const deleteById = async (request, response, next) => {
        const { id } = request.params
        const routineId = Number(id)

        try {
            const routine = await prisma.routine.delete({
                where: {
                    id: routineId
                }
            })
            const responseFormat = {
                data: routine,
                message: 'Routine deleted successfully'
            }
            return response.status(httpStatus.OK).json(responseFormat)

        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const updateById = async (request, response, next) => {
        const { id } = request.params
        const routineId = Number(id)
        const newRoutineData = request.body
        try {
            const routine = await prisma.routine.update({
                where: {
                    id: routineId
                },
                data: newRoutineData
            })

            return response.status(httpStatus.OK).json(routine)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    return {
        getRoutines,
        getRoutineById,
        createRoutine,
        deleteById,
        updateById
    }
}