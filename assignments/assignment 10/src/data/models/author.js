const { Sequelize, DataTypes } = require('sequelize');


module.exports=(sequelize) =>{
    console.log('building the model Author');
    sequelize.define(
        "Author", //Name of this model
        {
            //properties of his model
            name: DataTypes.STRING,
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            biography: DataTypes.STRING,
            photograph: DataTypes.STRING,
        }
    );
} 