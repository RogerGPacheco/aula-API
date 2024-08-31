const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/datebase');

const User = sequelize.define('Users', {
    id:{
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;