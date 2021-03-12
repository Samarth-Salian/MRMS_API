const mongoose = require("mongoose"); //import mongoose

var Schema = mongoose.Schema; // declare a new schema

var userSchema = new Schema({
  name: {
    type: String
  },
  seats: {
    type: Number
  },
  phoneNo: {
    type: String
  },
  floor: {
    type: String
  },
  buildingId: {
    type: String
  },
  features: {
    type: Array
  }
}, 
{
  timestamps: true
});

const User = mongoose.model("Room", userSchema ,"rooms"); 

module.exports = User;  // export created model
