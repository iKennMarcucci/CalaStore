const express = require('express');
const router = express.Router();
const pool = require('../database');
const arrayProductos = [];

router.get('/index', async (req, res) => {
    const bodys = await pool.query("SELECT id, id_categoria, nombre, precio, img FROM productos p WHERE id_categoria = 1");
    const croptops = await pool.query("SELECT id, id_categoria, nombre, precio, img FROM productos p WHERE id_categoria = 2");
    const leggingsSM = await pool.query("SELECT id, id_categoria, nombre, precio, img FROM productos p WHERE id_categoria = 3");
    const leggingsLXL = await pool.query("SELECT id, id_categoria, nombre, precio, img FROM productos p WHERE id_categoria = 4");
    const tops = await pool.query("SELECT id, id_categoria, nombre, precio, img FROM productos p WHERE id_categoria = 5");
    const conjuntos = await pool.query("SELECT id, id_categoria, nombre, precio, img FROM productos p WHERE id_categoria = 6");
    const blusas = await pool.query("SELECT id, id_categoria, nombre, precio, img FROM productos p WHERE id_categoria = 7");
    const enterizos = await pool.query("SELECT id, id_categoria, nombre, precio, img FROM productos p WHERE id_categoria = 8");

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
    arrayProductos.push(newProducto);
    res.redirect('/links/index');
});

router.get('/cart', async (req, res) => {
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
            valor = total.toLocaleString("en");
        }
        res.render('links/cart', { arrayProductos, bool, valor });
    } else {
        res.render('links/cart', { bool });
    }
});

module.exports = router;
