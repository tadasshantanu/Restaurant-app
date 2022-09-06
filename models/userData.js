const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const User = sequelize.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    RestaurantName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Address:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User