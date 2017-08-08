# Sequelize

## hasMany

## belongsToMany


## Exemplos 
```
module.exports = (sequelize, DataTypes) => {
  const Project =  sequelize.define("Project", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  })

  Project.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    // Project.belongsTo(models.User, {
    //   onDelete: "CASCADE",
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });
    //console.log(models);
  }
  return Project;
}

```