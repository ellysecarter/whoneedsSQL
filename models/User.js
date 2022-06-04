const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");



class User extends Model {
    // we are creating an instance method, to use on each instance of User
    checkPassword(loginPw) {
        // we use bcrypt's compare() method, and we are using 
        // the synchronous version even though async is typically
        // better for servers
        // we pass in the plaintext password and the hashed password
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init ( 
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
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be any duplicate email values in this table
            unique: true,
            // if allowNull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            // this means the password must be at least four characters long
            len: [4]
            }
        }

    },
    {
        hooks: {
            
            // async prefixes the function that contains the async function
            async beforeCreate(newUserData) {

                // await prefixes the asynchronous function (.hash)
                // value of response is assigned to password property of newUserData 
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                
                // we return newUserData
                return newUserData;
            },

            // we must hash the password in the PUT request as well
            // use beforeUpdate() hook from Sequelize
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }

        },
        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;