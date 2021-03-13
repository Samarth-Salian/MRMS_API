const router = require('express').Router();

const meeting = require('../controllers/meeting.controller');
const { ensureAuthenticated } = require('../middleware/auth');
const { createMeetingValidate, updateMeetingValidate } = require('../schemas/meeting.schema');

router.get('/', meeting.findAll);

router.get('/:meetingId', meeting.findOne);

router.post('/', ensureAuthenticated, createMeetingValidate, meeting.create);

router.put('/:meetingId', ensureAuthenticated, updateMeetingValidate, meeting.update);

router.delete('/:meetingId', ensureAuthenticated, meeting.delete);

module.exports = router;

