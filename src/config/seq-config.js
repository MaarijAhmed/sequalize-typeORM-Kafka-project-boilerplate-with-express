
const { Sequelize,DataTypes, NUMBER, DATE, where, INTEGER } = require('sequelize');

const sequelize = new Sequelize('postgres', 'user_1', '1234', {
    host: 'localhost',
    dialect: 'postgres'
});


 module.exports = sequelize;
