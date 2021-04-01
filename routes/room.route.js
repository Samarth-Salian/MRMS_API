const router = require('express').Router();

const room = require('../controllers/room.controller');
const { ensureAuthenticated } = require('../middleware/auth');
const { createRoomValidate } = require('../schemas/room.schema');


router.get('/', room.findAll);
router.get('/:roomId', room.findOne);
router.post('/', ensureAuthenticated, createRoomValidate, room.create);

module.exports = router;
