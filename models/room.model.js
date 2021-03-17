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
  voipAvailable: {
    type: Boolean
  },
  videoAvailable: {
    type: Boolean
  },
  lanAvailable: {
    type: Boolean
  },  
  whiteBoardAvailable: {
    type: Boolean
  }
}, 
{
  timestamps: true
});

const User = mongoose.model("Room", userSchema ,"rooms"); 

module.exports = User;  // export created model
