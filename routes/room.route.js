const router = require('express').Router();

const room = require('../controllers/room.controller');

router.get('/', room.findAll);

router.post('/', room.create);

module.exports = router;
