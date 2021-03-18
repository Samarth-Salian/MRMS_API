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
    }

}