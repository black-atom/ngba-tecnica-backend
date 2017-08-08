module.exports = (sequelize, DataTypes) => {

  const Funcionarios =  sequelize.define("funcionarios", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    photo_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rg: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    habilitacao_numero: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    habilitacao_validade: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },

  });

  Funcionarios.associate = (models) => {

    Funcionarios.belongsTo(models.funcionario_tipos, {
        foreignKey: "funcionario_tipo_id"
    });

    Funcionarios.belongsTo(models.enderecos, {
        foreignKey: {
            name: "endereco_id",
            allowNull: false
        }
    });

    Funcionarios.belongsToMany(models.atendimentos, {
        through: models.funcionario_atendimentos,
        foreignKey: {
            name: "funcionario_id"
        }
    });


  }
  
  return Funcionarios;
}