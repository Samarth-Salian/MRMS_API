const mongoose = require("mongoose"); //import mongoose

var Schema = mongoose.Schema; // declare a new schema

var userSchema = new Schema({
  buildingName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  }
);

const Location = mongoose.model("Location", userSchema, "locations");

module.exports = Location;  // export created model
