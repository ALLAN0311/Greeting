const express = require('express');
const router = express.Router();

const users = {
    'Cecep': { name: 'Cecep', nim: '12345' },
    'Ujang': { name: 'Ujang', nim: '67890' }
};

router.get('/aboutus/:user', (req, res) => {
    const user = req.params.user;
    if (users[user]) {
        res.json(users[user]);
    } else {
        res.status(404).send('Pengguna tidak ditemukan');
    }
});

module.exports = router;
