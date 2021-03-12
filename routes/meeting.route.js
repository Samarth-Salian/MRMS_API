const router = require('express').Router();

const meeting = require('../controllers/meeting.controller');
const { ensureAuthenticated } = require('../middleware/auth')

router.get('/search', (req, res) => {
    let meetingService = new MeetingService();
    res.send(meetingService.fetchRoomList());
});

router.get('/', meeting.findAll);

router.get('/:meetingId', meeting.findOne);

router.post('/', meeting.create);

router.put('/:meetingId', meeting.update);

router.delete('/:meetingId', meeting.delete);

module.exports = router;

