const sequelize = require('../util/database')

// const userRoute = require('./route/usercreate')
const usertable = require('../models/Restaurant_details')
const review = require("../models/review")
const user=require("../models/User")

exports.createuser=(req,res)=>{
  let name=req.body.Name
  user.create({Name:name}).then(result=>{
    res.send(result)
  })
}
exports.getuser=(req,res)=>{
  user.findAll().then(result=>{
    const data=[]
    for(var i=0;i<result.length;i++)
    {
      data.push(result[i].dataValues)

    }
    res.send(data)
  }
)}

exports.createdata=(req,res)=>{
  
    let name = req.body.name
    let Address = req.body.Address
    
     
     
        usertable.create({RestaurantName:name, Address:Address}).then(result=>{
          res.send(result)
        })
      }
    exports.getAlldata=(req,res)=>{
        usertable.findAll().then((result)=>{
        const data = []
        for(var i=0 ; i<result.length; i++){
          
          data.push(result[i].dataValues)
        }
        res.send(data)
    })}

    exports.createReview=(req,res)=>{
        let id = req.body.userid
        let msg = req.body.msg
        let resturantID=req.body.restid
        user.findOne({where:{id:id}}).then((user)=>{
         
          if(user){
            usertable.findOne({where:{id:resturantID}}).then((resturant)=>{
              if(resturant){
                review.create({ReviewMsg:msg, userId:id,restaurantId:resturantID}).then(data=>{
                  // console.log("review date:", data)
                  res.send(data)
                })
              }
            })
            
          }
        })      
      }

      exports.getAllReview=(req, res)=>{
        review.findAll().then(getReview=>{
          console.log("all date:",getReview)
          const data = []
        for(var i=0 ; i<getReview.length; i++){
          
          data.push(getReview[i].dataValues)
        }
        res.send(data)
       
        })
      }
      
      exports.totalReview=(req,res)=>{
        review.findAll().then(total=>{
          
          res.send({totalReview:total.length})
        })
      }
      