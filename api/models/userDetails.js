const mongoose = require('mongoose');
const AuthDetails = require('./authDetails');
const userDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cropName: { type: String, required: true },
  district: { type: String, required: true },
  checked: { type: [Number], default: [], required: false},
  authDetails: { type: mongoose.Schema.Types.ObjectId, ref: 'AuthDetails' },
});

const UserDetails = mongoose.model('UserDetails', userDetailsSchema);

module.exports = UserDetails;
