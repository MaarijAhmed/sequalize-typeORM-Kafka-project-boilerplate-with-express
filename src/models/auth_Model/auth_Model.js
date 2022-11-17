const { DataTypes } = require("sequelize");
const { default: sequelize } = require("../../config/seq-config");

const userModel = sequelize.define('users', {
    user_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    email : {
        type : DataTypes.STRING,
        unique : true
    },
    password : {
        type : DataTypes.STRING
    }
})

export default userModel;