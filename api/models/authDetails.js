const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const authDetailsSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

authDetailsSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt); 
      next();
    } catch (error) {
      next(error);
    }
  } else {
    return next();
  }
});

const AuthDetails = mongoose.model('AuthDetails', authDetailsSchema);

module.exports = AuthDetails;
