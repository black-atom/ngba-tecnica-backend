module.exports = (sequelize, DataTypes) => {

  const ClientesEnderecos =  sequelize.define("cliente_enderecos", {});

  return ClientesEnderecos;
}