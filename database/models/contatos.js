module.exports = (sequelize, DataTypes) => {

    const Contatos =  sequelize.define("contatos", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        obervacao: {
            type: DataTypes.STRING(250),
            allowNull: true,
        }
    });

    Contatos.associate = (models) => {

        Contatos.belongsTo(models.clientes, {
            onDelete: "CASCADE",
            name: {
                foreignKey: "funcionario_tipo_id",
                allowNull: false
            }
        });

    }
    
    return Contatos;
}