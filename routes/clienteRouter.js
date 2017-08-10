const router = require("express").Router();
const clienteCtrl = require("../controllers/cliente");

router.get("/clientes", clienteCtrl.getAllClientes );
router.post("/clientes", clienteCtrl.createCliente );


module.exports = router;
