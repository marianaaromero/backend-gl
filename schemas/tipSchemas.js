import Joi from "joi"

export const bodyTipSchema = Joi.object({
    body: Joi.object({
        title: Joi.string().max(80).required(),
        creator:Joi.string().max(80).required(),
        description: Joi.string().optional(),
        url: Joi.string().max(225).optional(),
        level: Joi.string().optional()
    })
})

export const idTipSchema = Joi.object({
    params: Joi.object({        
        id: Joi.string().pattern(/^[0-9]+$/, "id must be a number").required()
    })
})

export const updateTipSchema = Joi.object({
    body: bodyTipSchema.extract('body'),
    params: idTipSchema.extract('params')
})