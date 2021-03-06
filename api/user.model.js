const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  first_name: String,
  last_name: String,
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', UserSchema)