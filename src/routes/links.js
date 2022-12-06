const express = require('express');
const router = express.Router();
const pool = require('../database');
const open = require('open');
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
    const bodys = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 1 AND activo = 1");
    const croptops = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 2 AND activo = 1");
    const leggingsSM = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 3 AND activo = 1");
    const leggingsLXL = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 4 AND activo = 1");
    const tops = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 5 AND activo = 1");
    const conjuntos = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 6 AND activo = 1");
    const blusas = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 7 AND activo = 1");
    const enterizos = await pool.query("SELECT id, id_categoria, nombre, FORMAT(p.precio,'C3') AS precio, img FROM productos p WHERE id_categoria = 8 AND activo = 1");

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

router.post('/comprar', async (req, res) => {
    var stringxd = '';
    const cliente = req.body;
    console.log(cliente);
    for (let i = 0; i < arrayProductos.length; i++) {
        stringxd += '%3A%2A%0D%0A+%E2%80%A2+' + arrayProductos[i].id + '.+' + arrayProductos[i].nombre + '%0D%0A%EF%BF%BD+' + arrayProductos[i].precio + '+COP%0D%0A%2A';
    }
    open('https://web.whatsapp.com/send/?phone=573108522391&text=%2AHola%21+quisiera+comprar+estos+productos' + stringxd + 'Yo+soy+' + cliente.nombre + '+y+mis+datos+son%3A%2A+%0D%0A%E2%80%A2+' + cliente.tipo + '+' + cliente.cedula + '%0D%0A%E2%80%A2+' + cliente.nombre + '+' + cliente.apellido + '%0D%0A%E2%80%A2+' + cliente.email + '%0D%0A%E2%80%A2+' + cliente.telefono + '%0D%0A%E2%80%A2+' + cliente.direccion + '&type=phone_number&app_absent=0');

    var lastIDPedido = await pool.query("SELECT MAX(id_pedido) as IDLAST FROM pedidos");
    var id_pedidoSUMADO = lastIDPedido[0].IDLAST + 1;
    for (let i = 0; i < arrayProductos.length; i++) {
        console.log(arrayProductos[i].precio);
        var presioxd = arrayProductos[i].precio.replace(",","")
        await pool.query("INSERT INTO pedidos (id_pedido, cedula_cliente, nombre_cliente, telefono_cliente, direccion, id_producto, precio) VALUES (" + id_pedidoSUMADO + ", " + cliente.cedula + ", '" + cliente.nombre +" "+cliente.apellido + "', '" + cliente.telefono + "', '" + cliente.direccion + "', " + arrayProductos[i].id + ", " + presioxd + ")");
    }
    res.send("HAS COMPLETADO LA COMPRA! Espera a que el dueño se comunique para que pueda procesar la compra.");
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