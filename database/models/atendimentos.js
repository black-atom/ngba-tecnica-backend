module.exports = (sequelize, DataTypes) => {

    const Atendimentos =  sequelize.define("atendimentos", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        data: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    });

    Atendimentos.associate = (models) => {

        Atendimentos.belongsTo(models.clientes, {
            name: {
                foreignKey: "cliente_id",
                allowNull: false
            }
        });

        Atendimentos.belongsTo(models.enderecos, {
            name: {
                foreignKey: "endereco_id",
                allowNull: false
            }
        });

        Atendimentos.belongsTo(models.contatos, {
            name: {
                foreignKey: "contato_id",
                allowNull: false
            }
        });

        Atendimentos.belongsToMany(models.funcionarios, {
        through: models.funcionario_atendimentos,
        foreignKey: {
            name: "atendimento_id"
        }
    });

    }
    
    return Atendimentos;
}