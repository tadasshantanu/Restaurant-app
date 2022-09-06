const Sequelize = require('sequelize')

const sequelize = new Sequelize('restaurant','root','shantanu@123', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;