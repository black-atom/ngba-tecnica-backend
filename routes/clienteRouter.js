const router = require("express").Router();
const clienteCtrl = require("../controllers/cliente");

router.get("/clientes", clienteCtrl.getAllClientes );
router.post("/clientes", clienteCtrl.createCliente );
router.put("/clientes", clienteCtrl.updateCliente );


/* Cliente Enderedos */
router.delete("/clientes/:clienteID/enderecos/:addressID", clienteCtrl.deleteClienteEndereco);

module.exports = router;
