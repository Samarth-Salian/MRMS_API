const router = require('express').Router();
const { ensureAuthenticated } = require('../middleware/auth');
const { createLocationValidate } = require('../schemas/location.schema');
const location = require('../controllers/location.controller');

router.get('/', location.findAll);

router.post('/', ensureAuthenticated, createLocationValidate, location.create);

module.exports = router;
