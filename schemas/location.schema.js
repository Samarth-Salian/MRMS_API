const Joi = require('joi');

const { validateRequestWithSchema } = require('../util/helper');

module.exports = {
    
    createLocationValidate: (req, res, next) => {
        const schema = Joi.object({
            buildingName: Joi.string().required(),
            city: Joi.string().required(),
            country: Joi.string().required()
        });
        validateRequestWithSchema(req, res, next, schema);
    },

}