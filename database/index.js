"use strict";
const Sequelize = require('sequelize');
const fs        = require("fs");
const path      = require("path");
const R         = require("ramda"); 

/* Database Setup */
const dbConfig =  {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  //global definitions for models
  define: {
    freezeTableName: true,
    version: false
  }

};

/* Creates a Connection with the database */
const sequelize = new Sequelize('teste_postgres', 'redhat', 'redhat', dbConfig);

/* Test the Connection with the Database */
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

let db = {};

const modelsPath = path.join(__dirname, "models");

fs
  .readdirSync(modelsPath)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  /* Faz a importação de todas as models definidas*/
  .forEach(function(file) {
    const model = sequelize.import(path.join(modelsPath,file));
    db[model.name] = model; 
  });

/*  It associates the models if needed*/
Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});


sequelize.sync()
  .then(()=>console.log("Sucessfully created tables"))
  .catch((error) => console.error(error));

db.sequelize = sequelize;

module.exports = db;