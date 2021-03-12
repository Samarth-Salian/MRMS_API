module.exports = {
    'validateRequestWithSchema' : function (req, res, next, schema) {
        const { error, value } = schema.validate(req.body);
        if (error) {
            res.status(400).send(error.details);
        } else {
            //req.body = value;
            next();
        }
    }
}