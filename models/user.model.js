const mongoose = require("mongoose"); //import mongoose

var Schema = mongoose.Schema; // declare a new schema

var userSchema = new Schema({
  emailId: {
    type: String,
    unique: [true, 'email address is taken.']
  },
  mobile: {
    type: String
  },
  googleId: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  adminRole: {
    type: Boolean
  }
},
  {
    timestamps: true
  });

const User = mongoose.model("User", userSchema, "users");

module.exports = User;  // export created model
