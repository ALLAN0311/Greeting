// routes/aboutUsRoutes.js
const express = require('express');
const router = express.Router();

// simple "database"
const users = {
  angling: { name: 'Angling Samarkhandi', nim: '24120300019' },
  haikal:  { name: 'Muhammad Haikal',    nim: '24120300018' },
  allan:   { name: 'Allan Ardi Winata',  nim: '24110500025' }
};

// GET /aboutus/:user
router.get('/:user', (req, res) => {
  const key = req.params.user.toLowerCase();
  const found = users[key];
  if (found) {
    return res.json(found);
  } else {
    return res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
