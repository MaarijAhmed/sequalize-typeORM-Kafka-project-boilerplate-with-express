const { DataTypes } = require("sequelize");
const  sequelize  = require("../../config/seq-config");

const todo_model = sequelize.define('todos', {
    user_id : {
        type : DataTypes.INTEGER,
        unique : true,
    },
    todo_id : {
        type : DataTypes.INTEGER,
        unique : true,
        primaryKey : true
,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING
    },
})

module.exports = todo_model