import httpStatus from '../helpers/httpStatus.js'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const favRoutineController = () => {
    const markAsFavorite = async (request, response, next) => {
        const { body } = request
        const routineId = Number(body?.routineId ?? null)
        const userId = Number(body?.userId ?? null)

        try {
            const favoriteRoutine = await prisma.usersFavoriteRoutines.create({
                data: {
                    routineId,
                    userId
                }
            })

            return response.status(httpStatus.CREATED).json(favoriteRoutine)
        } catch (error) {
            next(error)
        }finally {
            await prisma.$disconnect()
        }
    }

    const getAllFavoriteRoutines = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)

        try {
            const favoriteRoutines = await prisma.usersFavoriteRoutines.findMany({
                where: {
                    userId
                },
                select: {
                    routineId: true,
                    userId: true,
                    routine: {
                        select: {
                            title: true
                        }
                    },
                    user: {
                        select: {
                            username: true,
                            email: true
                        }
                    }
                }
            })  
        
            return response.status(httpStatus.OK).json(favoriteRoutines)
        } catch (error) {
            next(error)
        } finally {
        await prisma.$disconnect()
    }
  }

  return {
    markAsFavorite,
    getAllFavoriteRoutines
  }
}