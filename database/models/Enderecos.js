module.exports = (sequelize, DataTypes) => {

    const Enderecos =  sequelize.define("enderecos", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        teste: DataTypes.STRING, 
    })

    Enderecos.associate = (models) => {

        Enderecos.belongsToMany(models.clientes, { through: models.cliente_enderecos });

    }
    
    return Enderecos;
}