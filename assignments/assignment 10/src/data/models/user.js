const { Sequelize, DataTypes } = require('sequelize');


module.exports=(sequelize) =>{
    console.log('building the model User');
    sequelize.define(
        "User", //Name of this model
        {
            //properties of his model
            username: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            password: DataTypes.STRING,
            photograph: DataTypes.STRING,
    
        }
    );
} 