const Joi = require('joi');

const { validateRequestWithSchema } = require('../util/helper');

module.exports = {
    createMeetingValidate: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string().required(),
            date: Joi.string().length(8).pattern(/^[0-9]+$/).required(),
            slotFrom: Joi.number().greater(0).less(97).required(),
            slotTo: Joi.number().greater(0).less(97).required(),
            roomId: Joi.string().required(),
            userId: Joi.string().required()
        });
        validateRequestWithSchema(req, res, next, schema);
    },

    updateMeetingValidate: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string(),
            date: Joi.string().length(8).pattern(/^[0-9]+$/),
            slotFrom: Joi.number().greater(0).less(97),
            slotTo: Joi.number().greater(0).less(97),
            roomId: Joi.string(),
            userId: Joi.string().required()
        });
        validateRequestWithSchema(req, res, next, schema);
    }

}