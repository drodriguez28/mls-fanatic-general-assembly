
const express = require('express')


const templateApi = require('../models/soccerModel.js')


const soccerRouter = express.Router()

//get all 

soccerRouter.get('/soccer', (req, res) => {
  soccerApi.getAllSoccers()
  .then((getAllSoccers)=>{
    console.log(getAllSoccers)
    //res.json(allSoccers)
    res.render('template/allSoccers',{AllSoccers})
  })
})














module.exports = {
  soccerRouter
}
