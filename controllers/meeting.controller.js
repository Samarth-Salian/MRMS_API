const Meeting = require('../models/meeting.model');

// Create and Save a new Meeting
exports.create = (req, res) => {
    let meeting = req.body;
    const newMeeting = Meeting({
        name: meeting.name,
        date: meeting.date,
        slotFrom: meeting.slotFrom,
        slotTo: meeting.slotTo,
        roomId: meeting.roomId,
        userId: meeting.userId
    });
    newMeeting.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while inserting Meeting"
        });
    });
};

// Retrieve and return all meetings from the database.
exports.findAll = (req, res) => {
    Meeting.find()
        .then(meetings => {
            res.send(meetings);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving meetings."
            });
        });
};

// Find a single meeting with a meetingId
exports.findOne = (req, res) => {
    Meeting.findById(req.params.meetingId)
        .then(meeting => {
            res.send(meeting);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Meeting not found with id " + req.params.meetingId
                });
            }
            return res.status(500).send({
                message: "Error retrieving Meeting with id " + req.params.meetingId
            });
        });
};

// Update a meeting identified by the meetingId
exports.update = (req, res) => {
    let meeting = req.body;
    // Find meeting and update it with the request body
    Meeting.findByIdAndUpdate(req.params.meetingId, {
        name: meeting.name,
        date: meeting.date,
        slotFrom: meeting.slotFrom,
        slotTo: meeting.slotTo,
        roomId: meeting.roomId,
        userId: meeting.userId
    }, { new: true })
        .then(meeting => {
            if (!meeting) {
                return res.status(404).send({
                    message: "Meeting not found with id " + req.params.meetingId
                });
            }
            res.send(meeting);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Meeting not found with id " + req.params.meetingId
                });
            }
            return res.status(500).send({
                message: "Error updating meeting with id " + req.params.meetingId
            });
        });

};

// Delete a meeting with the specified meetingId
exports.delete = (req, res) => {
    // Find meeting and delete it with the request ID
    Meeting.findByIdAndDelete(req.params.meetingId)
        .then(meeting => {
            if (!meeting) {
                return res.status(404).send({
                    message: "Meeting not found with id " + req.params.meetingId
                });
            }
            res.send(meeting);
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Meeting not found with id " + req.params.meetingId
                });
            }
            return res.status(500).send({
                message: "Error deleting meeting with id " + req.params.meetingId
            });
        });

};