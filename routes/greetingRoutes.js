// routes/greetingRoutes.js
const express = require('express');
const router = express.Router();

// GET /greeting?name=Teo
router.get('/', (req, res) => {
  const name = req.query.name;
  if (name) return res.send(`hello ${name}`);
  return res.send('hello stranger');
});

module.exports = router;
