const mongoose = require("mongoose"); //import mongoose

var Schema = mongoose.Schema; // declare a new schema

var meetingSchema = new Schema({
  name: {
    type: String
  },
  date: {
    type: String
  },
  slotFrom: {
    type: Number
  },
  slotTo: {
    type: Number
  },
  roomId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Room', 
    required: true 
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
}, 
{
  timestamps: true
});

const Meeting = mongoose.model("Meeting", meetingSchema ,"meetings"); 

module.exports = Meeting;  // export created model
