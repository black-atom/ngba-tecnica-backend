module.exports = (sequelize, DataTypes) => {

  const Clientes =  sequelize.define("clientes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    razao_social:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    cnpj_cpf:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome_fantasia:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    inscricao_estadual: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  });

  Clientes.associate = (models) => {

    Clientes.hasMany(models.contatos, { foreignKey:"cliente_id" });

    Clientes.belongsToMany(models.enderecos, { 
        through: models.cliente_enderecos,
        foreignKey: {
            name: "cliente_id"
        }
    });

  }
  
  return Clientes;
}