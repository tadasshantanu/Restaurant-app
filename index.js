const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const sequelize = require('./util/database')

const userRoute = require('./route/usercreate')
const usertable = require('./models/userData')
const review = require("./models/review")

app.use(bodyparser.json());

app.use(cors());

app.use(userRoute)

// realation
usertable.hasMany(review)
review.belongsTo(usertable)

sequelize.sync().then(res => {
  app.listen(3000)
}).catch(err => {
  console.log(err)
})










