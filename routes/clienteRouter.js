const router = require("express").Router();
const clienteCtrl = require("../controllers/cliente");

router.get("/clientes", clienteCtrl.getAllClientes );
router.post("/clientes", clienteCtrl.createCliente );
router.put("/clientes", clienteCtrl.updateCliente );
router.get("/clientes/:clienteID", clienteCtrl.getClienteByID );


/* Cliente Enderedos */
router.delete("/clientes/:clienteID/enderecos/:addressID", clienteCtrl.deleteClienteEndereco);


/* Cliente Contatos */
router.delete("/clientes/:clienteID/contatos/:contatoID", clienteCtrl.deleteContato);

module.exports = router;
