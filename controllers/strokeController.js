import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const strokeController = (strokes) => {
    const getStrokes = async (_request, response, next) => {
        try {
            const strokes = await prisma.stroke.findMany()
            
            return response.status(200).json(strokes)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }   
    }

    const getStrokeById = async (request, response, next) => {
        const { id } = request.params
        const strokeId = Number(id)

        try {
            const stroke = await prisma.stroke.findUnique({
                where: {
                    id: strokeId
                }
            })
            const responseFormat = {
                data: stroke,
            }
            return response.status(200).json(responseFormat)
        
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    return {
        getStrokes,
        getStrokeById
    }
}