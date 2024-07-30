import Joi from 'joi'

export const bodyRoutineSchema = Joi.object({
    body: Joi.object({
        title: Joi.string().max(80).required(),
        description: Joi.string().required(),
        duration: Joi.number().optional().prefs({ convert: false }),
        distance: Joi.number().optional().prefs({ convert: false }),
        details: Joi.string().required(),
        recommendedLevel: Joi.string().optional()    
    })
})

export const idRoutineSchema = Joi.object({
    params: Joi.object({        
        id: Joi.string().pattern(/^[0-9]+$/, "id must be a number").required()
    })
})

export const updateRoutineSchema = Joi.object({
    body: bodyRoutineSchema.extract('body'),
    params: idRoutineSchema.extract('params')
})