const Joi = require('joi');

const { validateRequestWithSchema } = require('../util/helper');

module.exports = {
    createRoomValidate: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string().required(),
            seats: Joi.number().greater(0).less(50).required(), 
            phoneNo: Joi.string().pattern(/^([0]|\+91)?\d{10}/),
            floor: Joi.number().greater(-1).less(100).required(),
            buildingId: Joi.string().required(),
            voipAvailable : Joi.boolean(),
            videoAvailable : Joi.boolean(),
            lanAvailable : Joi.boolean(),
            whiteBoardAvailable : Joi.boolean()
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