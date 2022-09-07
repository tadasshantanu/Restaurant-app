const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const sequelize = require('./util/database')

const api = require('./route/api')
const resturant = require('./models/Restaurant_details')
const review = require("./models/review")
const user=require('./models/User')

app.use(bodyparser.json());

app.use(cors());

app.use(api)

// relation
user.hasMany(review)
review.belongsTo(user)


resturant.hasMany(review)
review.belongsTo(resturant)

sequelize.sync().then(res => {
  app.listen(3000)
}).catch(err => {
  console.log(err)
})










