import httpStatus from '../helpers/httpStatus.js'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const favTipController = () => {
    const markAsFavorite = async (request, response, next) => {
        const { body } = request
        const tipId = Number(body?.tipId ?? null)
        const userId = Number(body?.userId ?? null)

        try {
            const favoriteTip = await prisma.usersFavoriteTips.create({
                data: {
                    tipId,
                    userId
                }
            })

            return response.status(httpStatus.CREATED).json(favoriteTip)
        } catch (error) {
            next(error)
        }finally {
            await prisma.$disconnect()
        }
    } 

    const getAllFavoriteTips = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)

        try {
            const favoriteTips = await prisma.usersFavoriteTips.findMany({
                where: {
                    userId
                },
                select: {
                    tipId: true,
                    userId: true,
                    tip: {
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
    
            return response.status(httpStatus.OK).json(favoriteTips)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }
    return {
        markAsFavorite,
        getAllFavoriteTips
    }
}
