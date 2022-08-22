const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/index', async (req, res) =>{
    const bodys = await pool.query("SELECT nombre, FORMAT(p.precio, 'C', 'en-us') as precio, img FROM productos p WHERE id_categoria = 1");
    const croptops = await pool.query("SELECT nombre, FORMAT(p.precio, 'C', 'en-us') as precio, img FROM productos p WHERE id_categoria = 2");
    const leggingsSM = await pool.query("SELECT nombre, FORMAT(p.precio, 'C', 'en-us') as precio, img FROM productos p WHERE id_categoria = 3");
    const leggingsLXL = await pool.query("SELECT nombre, FORMAT(p.precio, 'C', 'en-us') as precio, img FROM productos p WHERE id_categoria = 4");
    const tops = await pool.query("SELECT nombre, FORMAT(p.precio, 'C', 'en-us') as precio, img FROM productos p WHERE id_categoria = 5");
    const conjuntos = await pool.query("SELECT nombre, FORMAT(p.precio, 'C', 'en-us') as precio, img FROM productos p WHERE id_categoria = 6");
    const blusas = await pool.query("SELECT nombre, FORMAT(p.precio, 'C', 'en-us') as precio, img FROM productos p WHERE id_categoria = 7");
    const enterizos = await pool.query("SELECT nombre, FORMAT(p.precio, 'C', 'en-us') as precio, img FROM productos p WHERE id_categoria = 8");
    console.log(tops);
    res.render('links/index', { bodys, croptops, leggingsSM, leggingsLXL, tops, conjuntos, blusas, enterizos });
});

module.exports = router;
