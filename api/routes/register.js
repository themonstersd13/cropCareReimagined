const express = require('express');
const UserDetails = require('../models/userDetails');
const AuthDetails = require('../models/authDetails'); 
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, cropName, district, username, password } = req.body;

    if (!name || !cropName || !district || !username || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const existingUser = await AuthDetails.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists.' });
    }

    const authDetails = new AuthDetails({
      username,
      password,  
    });

    await authDetails.save();

    const userDetails = new UserDetails({
      name,
      cropName,
      district,
      authDetails: authDetails._id,  
    });

    await userDetails.save();

    return res.status(201).json({ message: 'Registration successful' });

  } catch (err) {
    console.error('Error during registration:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
