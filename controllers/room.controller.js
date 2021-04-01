const Room = require('../models/room.model');

// Create a new Room
exports.create = (req, res) => {
    let room = req.body;
    const newRoom = Room({
        name: room.name,
        seats: room.seats,
        phoneNo: room.phoneNo,
        floor: room.floor,
        buildingId: room.buildingId,
        voipAvailable : room.voipAvailable,
        videoAvailable : room.videoAvailable,
        lanAvailable : room.lanAvailable,
        whiteBoardAvailable : room.whiteBoardAvailable
    });
    newRoom.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while inserting Rooms"
        });
    });
};

// Retrieve and return all rooms from the database.
exports.findAll = (req, res) => {
    Room.find()
        .then(rooms => {
            res.send(rooms);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving rooms."
            });
        });
};

// Find a single room with a roomId
exports.findOne = (req, res) => {
    Room.findById(req.params.roomId)
        .then(room => {
            res.send(room);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Room not found with id " + req.params.roomId
                });
            }
            return res.status(500).send({
                message: "Error retrieving Room with id " + req.params.roomId
            });
        });
};

// Update a room identified by the roomId
exports.update = (req, res) => {

};

// Delete a room with the specified roomId
exports.delete = (req, res) => {

};