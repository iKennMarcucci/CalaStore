const express = require('express');
const router = express.Router();
const pool = require('../database');
let arrayProductos = [];

router.get('/bodies', async (req, res) => {
    const bodys = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 1");
    res.render('links/bodies', { bodys });
});

router.get('/croptops', async (req, res) => {
    const croptops = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 2");
    res.render('links/croptops', { croptops });
});

router.get('/legsm', async (req, res) => {
    const leggingsSM = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 3");
    res.render('links/legsm', { leggingsSM });
});

router.get('/leglxl', async (req, res) => {
    const leggingsLXL = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 4");
    res.render('links/leglxl', { leggingsLXL });
});

router.get('/tops', async (req, res) => {
    const tops = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 5");
    res.render('links/tops', { tops });
});

router.get('/sets', async (req, res) => {
    const conjuntos = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 6");
    res.render('links/sets', { conjuntos });
});

router.get('/blusas', async (req, res) => {
    const blusas = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 7");
    res.render('links/blusas', { blusas });
});

router.get('/enterizos', async (req, res) => {
    const enterizos = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 8");
    res.render('links/enterizos', { enterizos });
});

router.get('/index', async (req, res) => {
    const bodys = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 1");
    const croptops = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 2");
    const leggingsSM = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 3");
    const leggingsLXL = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 4");
    const tops = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 5");
    const conjuntos = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 6");
    const blusas = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 7");
    const enterizos = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 8");

    res.render('links/index', { bodys, croptops, leggingsSM, leggingsLXL, tops, conjuntos, blusas, enterizos });
});

router.post('/index', async (req, res) => {
    const { id, id_categoria, nombre, precio, img } = req.body;

    const newProducto = {
        id,
        id_categoria,
        nombre,
        precio,
        img,
        linkimg: "none"
    };
    var esta = false;
    for (let index = 0; index < arrayProductos.length; index++) {
        const element = arrayProductos[index];
        if (newProducto.id == element.id) {
            esta = true;
            break;
        }
    }
    if (arrayProductos.length > 0) {
        if (!esta) {
            arrayProductos.push(newProducto);
        }
    } else {
        arrayProductos.push(newProducto);
    }
    res.redirect('/links/index');
});

router.post('/cart', (req, res) => {
    var bool = true;
    var total = 0;
    for (let i = 0; i < arrayProductos.length; i++) {
        if (arrayProductos[i].nombre == req.body.nombre) {
            resta = parseInt(arrayProductos[i].precio);
            arrayProductos.splice(i, 1);
        }
    }

    for (let i = 0; i < arrayProductos.length; i++) {
        total = total + parseInt(arrayProductos[i].precio);
    }
    valor = total.toLocaleString("en") + ",000";
    if (arrayProductos.length != 0) {
        res.render('links/cart', { arrayProductos, bool, valor });
    } else {
        bool = false;
        res.render('links/cart', { bool });
    }
});

router.get('/cart', (req, res) => {
    var bool = false;
    var total = 0;
    if (arrayProductos.length >= 1) {
        bool = true;
        for (let i = 0; i < arrayProductos.length; i++) {
            if (arrayProductos[i].id_categoria == 1) {
                const nombreimg = arrayProductos[i].img;
                if (arrayProductos[i].linkimg == "none") {
                    arrayProductos[i].linkimg = "/img/productos/Bodys/" + nombreimg;
                }
            }
            if (arrayProductos[i].id_categoria == 2) {
                const nombreimg = arrayProductos[i].img;
                if (arrayProductos[i].linkimg == "none") {
                    arrayProductos[i].linkimg = "/img/productos/CropTops/" + nombreimg;
                }
            }
            if (arrayProductos[i].id_categoria == 3) {
                const nombreimg = arrayProductos[i].img;
                if (arrayProductos[i].linkimg == "none") {
                    arrayProductos[i].linkimg = "/img/productos/LeggingsSM/" + nombreimg;
                }
            }
            if (arrayProductos[i].id_categoria == 4) {
                const nombreimg = arrayProductos[i].img;
                if (arrayProductos[i].linkimg == "none") {
                    arrayProductos[i].linkimg = "/img/productos/LeggingsLXL/" + nombreimg;
                }
            }
            if (arrayProductos[i].id_categoria == 5) {
                const nombreimg = arrayProductos[i].img;
                if (arrayProductos[i].linkimg == "none") {
                    arrayProductos[i].linkimg = "/img/productos/Tops/" + nombreimg;
                }
            }
            if (arrayProductos[i].id_categoria == 6) {
                const nombreimg = arrayProductos[i].img;
                if (arrayProductos[i].linkimg == "none") {
                    arrayProductos[i].linkimg = "/img/productos/Conjuntos/" + nombreimg;
                }
            }
            if (arrayProductos[i].id_categoria == 7) {
                const nombreimg = arrayProductos[i].img;
                if (arrayProductos[i].linkimg == "none") {
                    arrayProductos[i].linkimg = "/img/productos/Blusas/" + nombreimg;
                }
            }
            if (arrayProductos[i].id_categoria == 8) {
                const nombreimg = arrayProductos[i].img;
                if (arrayProductos[i].linkimg == "none") {
                    arrayProductos[i].linkimg = "/img/productos/Enterizos/" + nombreimg;
                }
            }
            total = total + parseInt(arrayProductos[i].precio);
            
            valor = total.toLocaleString("en") + ",000";
        }
        res.render('links/cart', { arrayProductos, bool, valor });
    } else {
        res.render('links/cart', { bool });
    }
});

module.exports = router;