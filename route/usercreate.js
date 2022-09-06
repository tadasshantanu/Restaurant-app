const express = require('express')
const router = express.Router()
const controller=require('../controllers/controllers')

// router.post('/userData',async(req,res)=>{
//    console.log("data :",req.body)
//    res.send("success")
// })
router.post('/createData',controller.createdata)
router.get('/getAlldata',controller.getAlldata)
router.post('/createReview',controller.createReview)
router.get('/getAllReview',controller.getAllReview)
router.get('/totalReview',controller.totalReview)

module.exports=router