const Location = require('../models/location.model');

// Create and Save a new Location
exports.create = (req, res) => {
    let location = req.body;
    const newLocation = Location({
        buildingName: location.buildingName,
        city: location.city,
        country: location.country       
    });
    newLocation.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while inserting Location"
        });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    Location.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });

};

// Find a single note with a userId
exports.findOne = (req, res) => {

};

// Update a user identified by the userId
exports.update = (req, res) => {

};

// Delete a user with the specified userId
exports.delete = (req, res) => {

};