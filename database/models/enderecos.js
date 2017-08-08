module.exports = (sequelize, DataTypes) => {

    const Enderecos =  sequelize.define("enderecos", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rua: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        complemento: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cidade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ponto_refencia: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cep: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    })

    Enderecos.associate = (models) => {

        Enderecos.belongsToMany(models.clientes, { through: models.cliente_enderecos });

    }
    
    return Enderecos;
}