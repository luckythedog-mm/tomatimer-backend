const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, trim: true, unique: true, required: true },
  password: { type: String, required: true, minlength: 5 },
  displayName: { type: String },
});

module.exports = User = mongoose.model("user", userSchema);