const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Options extends Model {}

Options.init ( 
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
        // define a username column
        option: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question_id: {
            type: DataTypes.INTEGER,
            // defaultValue: 1,
            // allowNull: false,
            references: {
                model: 'question',
                key: 'id'
            }
            
        } 

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
        modelName: 'options'
    }
);

module.exports = Options;