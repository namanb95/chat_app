const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: {
    type: String,
    minlength: 4,
    required: [true, "Name is required field"]
  },
  email: {
    type: String,
    validate: {
      validator: email => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email),
      message: err => `${err.value} is not a valid email`
    },
    required: [true, "Email is required field"]
  },
  password: {
    type: String,
    minlength: 5,
    required: [true, "Password is required field"]
  },
  avatar: {
    type: String,
    required: [true, "Avatar is required field"]
  },
  create_date: {
    type: Date,
    default: new Date()
  },
  modify_date: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("user", user, "users");
