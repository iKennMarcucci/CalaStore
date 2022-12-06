const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/admin', (req, res) => {
    var index = true;
    res.render('links/admin', { index });
});

router.post('/links/agregar', async (req, res) => {
    var index = true;
    const { name, id, presio, imagen } = req.body;
    await pool.query("INSERT INTO productos (nombre, id_categoria, precio, img) VALUES ('" + name + "', " + id + ", " + presio + ", '" + imagen + "')");
    const categoria = await pool.query("SELECT * FROM categorias");
    const listaProducto = await pool.query("SELECT id, nombre FROM productos");
    const IDPedidos = await pool.query("SELECT DISTINCT id_pedido FROM pedidos");
    var fijos = [];
    for (let i = 0; i < IDPedidos.length; i++) {
        var ide = IDPedidos[i].id_pedido;
        fijos[i] = await pool.query("SELECT id_pedido, cedula_cliente, telefono_cliente, direccion FROM pedidos WHERE id_pedido = " + ide + " GROUP BY id_pedido");
    }
    var productos = [];
    for (let i = 0; i < fijos.length; i++) {
        var ide = IDPedidos[i].id_pedido;
        productos[i] = await pool.query("SELECT p.nombre as nombre , o.cantidad_productos as cantidad, o.precio * o.cantidad_productos as total FROM productos p, pedidos o WHERE o.id_pedido = " + ide + " and p.id = o.id_producto");
    }
    res.render('links/admin/adminaccess', { index, fijos, productos, categoria, listaProducto });
});

router.post('/links/productos', async (req, res) => {
    var index = true;
    const categoria = await pool.query("SELECT * FROM categorias");
    const submitONE = req.body.borrar;
    const submitTWO = req.body.editar;
    const IDPedidos = await pool.query("SELECT DISTINCT id_pedido FROM pedidos");
    var fijos = [];
    for (let i = 0; i < IDPedidos.length; i++) {
        var id = IDPedidos[i].id_pedido;
        fijos[i] = await pool.query("SELECT id_pedido, cedula_cliente, telefono_cliente, direccion FROM pedidos WHERE id_pedido = " + id + " GROUP BY id_pedido");
    }
    var productos = [];
    for (let i = 0; i < fijos.length; i++) {
        var id = IDPedidos[i].id_pedido;
        productos[i] = await pool.query("SELECT p.nombre as nombre , o.cantidad_productos as cantidad, o.precio * o.cantidad_productos as total FROM productos p, pedidos o WHERE o.id_pedido = " + id + " and p.id = o.id_producto");
    }
    if (submitONE === "Borrar") {
        await pool.query("DELETE FROM productos WHERE id = " + req.body.selectInput);
        const listaProducto = await pool.query("SELECT id, nombre FROM productos");
        res.render('links/admin/adminaccess', { index, fijos, productos, categoria, listaProducto });
    } else if (submitTWO === "Editar") {
        const productoAEditar = await pool.query("SELECT * FROM productos WHERE id = " + req.body.selectInput);
        const listaProducto = await pool.query("SELECT id, nombre FROM productos");
        res.render('links/admin/adminaccess', { index, fijos, productos, categoria, listaProducto, productoAEditar });
    } else {
        res.send("ERROR EN EL SERVIDOR, POR FAVOR VUELVE A INICIAR SESIÓN.");
    }
});

router.post('/links/admin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await pool.query("SELECT * FROM administrador WHERE password = '" + password + "' AND username = '" + username + "'");
        if (admin.length > 0) {
            var index = true;
            const IDPedidos = await pool.query("SELECT DISTINCT id_pedido FROM pedidos");
            var fijos = [];
            for (let i = 0; i < IDPedidos.length; i++) {
                var id = IDPedidos[i].id_pedido;
                fijos[i] = await pool.query("SELECT id_pedido, cedula_cliente, telefono_cliente, direccion FROM pedidos WHERE id_pedido = " + id + " GROUP BY id_pedido");
            }
            var productos = [];
            for (let i = 0; i < fijos.length; i++) {
                var id = IDPedidos[i].id_pedido;
                productos[i] = await pool.query("SELECT p.nombre as nombre , o.cantidad_productos as cantidad, o.precio * o.cantidad_productos as total FROM productos p, pedidos o WHERE o.id_pedido = " + id + " and p.id = o.id_producto");
            }

            const categoria = await pool.query("SELECT * FROM categorias");
            const listaProducto = await pool.query("SELECT id, nombre FROM productos");

            res.render('links/admin/adminaccess', { index, fijos, productos, categoria, listaProducto });
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

router.get('/links/admin/adminaccess', (req, res) => {
    var index = true;
    res.render('links/admin', { index });
});

module.exports = router;