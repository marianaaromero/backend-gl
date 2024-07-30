import httpStatus from '../helpers/httpStatus.js'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const tipController = (tips) => {
    const getTips = async (request, response, next) => {
        const { query } = request
        
        try {
            const tips = await prisma.tip.findMany({
                where: {
                    title: {
                        contains: query?.title ?? ''
                    }
                }
            })
        
            return response.status(httpStatus.OK).json(tips)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }   
    }

    const createTip = async (request, response, next) => {
        const newTip = request.body

        try {
            const createdTip = await prisma.tip.create({
                data: newTip
            })

            const responseFormat = {
                data: createdTip,
                message: 'Tip created successfully'
            }
            
            return response.status(httpStatus.CREATED).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getTipById = async (request, response, next) => {
        const { id } = request.params
        const tipId = Number(id)

        try {
            const tip = await prisma.tip.findUnique({
                where: {
                    id: tipId
                }
            })
            const responseFormat = {
                data: tip,
            }
            return response.status(httpStatus.OK).json(responseFormat)
        
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const deleteById = async (request, response, next) => {
        const { id } = request.params
        const tipId = Number(id)

        try {
            const tip = await prisma.tip.delete({
                where: {
                    id: tipId
                }
            })
            const deleteKey = tip.url.split('/').pop()
            await deleteFile(deleteKey)

            const responseFormat = {
                data: tip,
                message: 'Tip deleted successfully'
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
        const tipId = Number(id)
        const newTipData = request.body
        try {
            const tip = await prisma.tip.update({
                where: {
                    id: tipId
                },
                data: newTipData
            })

            return response.status(httpStatus.OK).json(tip)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    return {
        getTips,
        createTip,
        getTipById,
        deleteById,
        updateById
    }
}