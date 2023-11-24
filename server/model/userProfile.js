const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  profilePicture: { type: String },
});
const userProfile = mongoose.model('userProfile', userProfileSchema);

module.exports = userProfile;