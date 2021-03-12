//require mongoose module
var mongoose = require('mongoose');

//export this function and imported by index.js

module.exports = function () {

    mongoose.Promise = global.Promise;

    // Connecting to the database
    mongoose.connect(process.env.ATLAS_DB, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
}