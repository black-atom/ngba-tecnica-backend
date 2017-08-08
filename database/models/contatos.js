module.exports = (sequelize, DataTypes) => {

    const Contatos =  sequelize.define("contatos", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        telefone: DataTypes.STRING,
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        obervacao: DataTypes.STRING   
    });

    Contatos.associate = (models) => {

        Contatos.belongsTo(models.clientes, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

    }
    
    return Contatos;
}