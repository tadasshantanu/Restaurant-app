const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Restaurant = sequelize.define('restaurant', {
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

module.exports = Restaurant