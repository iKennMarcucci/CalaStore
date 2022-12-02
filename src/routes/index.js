const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/admin', (req, res) => {
    var index = true;
    res.render('links/admin', { index });
});

router.post('/links/admin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await pool.query("SELECT * FROM administrador WHERE password = '" + password + "' AND username = '" + username + "'");
        console.log(admin);
        if (admin.length > 0) {
            res.send("logueado.");
        } else {
            var index = true;
            const fallo = true;
            res.render('links/admin', { fallo, index });
        }
    } catch (error) {
        console.log(error);
        res.send("Se ha generado un error del servidor.");
    }
});



module.exports = router;