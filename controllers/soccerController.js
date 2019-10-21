
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


//get single 


// get one
soccerRouter.get('/soccer/:id',(req, res)=>{
  soccerApi.getSingleSoccer(req.params.id)
  .then((singleSoccer)=>{
    //res.json(singleSoccer)
    res.render('template/singleSoccer',{singleSoccer} )
  })
})













module.exports = {
  soccerRouter
}
