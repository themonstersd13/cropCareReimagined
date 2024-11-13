const express = require('express');
const bcrypt = require('bcryptjs');
const UserDetails = require('../models/userDetails');
const AuthDetails = require('../models/authDetails');
const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
   
    const user = await AuthDetails.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const userDetails = await UserDetails.findOne({ authDetails: user._id }).populate('authDetails');
    
    res.status(200).json({
      message: 'Login successful',
      userDetails: {
        name: userDetails.name,
        cropName: userDetails.cropName,
        district: userDetails.district
      }
    });

  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
