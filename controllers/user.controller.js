const Joi = require('joi');
const User = require('../models/user.model');

// Create and Save a new User
exports.create = (req, res) => {
    let user = req.body;
    const newUser = User({
        emailId: user.emailId,
        firstName: user.firstName,
        lastName: user.lastName,
        mobile: user.mobile
    });
    newUser.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while inserting User"
        });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
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