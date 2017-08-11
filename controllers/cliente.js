const R = require("ramda");
const database = require('../database');

const getAllClientes = ( req, res, next ) => {

    database.clientes.findAll({include: [ database.enderecos, database.contatos ]})
    .then(clientes => res.json(clientes))
    .catch(error => next(error))

};

const createCliente = ( req, res, next) => {

    const contatos  = R.prop("contatos", req.body);
    const enderecos = R.prop("enderecos", req.body);

    database.sequelize.transaction((t) => {

        const opts = {
            where: {cnpj_cpf: R.prop("cnpj_cpf", req.body)}, 
            defaults: req.body,
            transaction: t
        };

        let cliente_id = null;

        return  database.clientes.findOrCreate(opts)
        .spread(( clienteCreated, created ) => {
            return Promise.resolve(clienteCreated);
        })
        .then( cliente => {

            cliente_id = cliente.id;

            return Promise.all(
                 enderecos.map( endereco => {
                     return database.enderecos.create(endereco, {transaction: t});
                 })
            );

        })
        .map(endereco => {

            return endereco.addCliente(cliente_id, {transaction: t});

        })
        .then(() =>{

            return Promise.all(
                contatos.map( contato => {
                    contato.cliente_id = cliente_id;
                    return database.contatos.create(contato, {transaction: t});
                })
            );

        })
        .then(()=>{

            return database.clientes.findById(cliente_id, {
                transaction: t,
                include: [ database.enderecos, database.contatos ]
            });

        })
    })
    .then(clienteCreated => res.status(201).json(clienteCreated))
    .catch(error=> next(error));

}





module.exports = {
    getAllClientes,
    createCliente
};