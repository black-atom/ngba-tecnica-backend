module.exports = (sequelize, DataTypes) => {

  const FuncionarioTipos =  sequelize.define("funcionario_tipos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  });
  
  return FuncionarioTipos;
}