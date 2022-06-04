const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Question extends Model {}

Question.init ( 
    {
        id: {
            // use the special Sequelize DataTypes object provide 
            // what type of data it is, INTEGER***
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the Primary Key****
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
    
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },


    

    },
    {
        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'question'
    }
);

module.exports = Question;