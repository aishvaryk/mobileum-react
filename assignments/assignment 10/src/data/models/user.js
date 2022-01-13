const { Sequelize, DataTypes } = require('sequelize');


module.exports=(sequelize) =>{
    console.log('building the model User');
    sequelize.define(
        "User", //Name of this model
        {
            //properties of his model
            username: DataTypes.STRING,
            emailId: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            password: DataTypes.STRING,
            photo: DataTypes.STRING,
    
        }
    );
} 