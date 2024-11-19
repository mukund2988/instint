const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  gmail: { type: String, required: false },
  address: { type: String, required: true },
  workArea: { type: String, required: true },
  area: { type: [String], required: false },
  shopName: { type: String, required: false },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
