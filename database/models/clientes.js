module.exports = (sequelize, DataTypes) => {

  const Clientes =  sequelize.define("clientes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    razao_social: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    nome_fantasia: DataTypes.STRING,
    nome_fantasia: DataTypes.STRING,
    inscricao_estadual: DataTypes.TEXT
  });

  Clientes.associate = (models) => {

    Clientes.hasMany(models.contatos);

    Clientes.belongsToMany(models.enderecos, { through: models.cliente_enderecos });

  }
  
  return Clientes;
}