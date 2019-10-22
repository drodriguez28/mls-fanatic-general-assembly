
const express = require('express')


const soccerApi = require('../models/soccerModel.js')


const soccerRouter = express.Router()

//create brother (this makes the create Soccer page)
soccerRouter.get('/soccer/new', (req, res) => {
  res.render('template/createSoccerForm')
})

// update brother (this makes the update Soccer)
soccerRouter.get('/soccer/edit/:id', (req, res) => {
  soccerApi.getSingleSoccer(req.params.id)
    .then((singleSoccer) => {
      res.render('template/editSoccerForm', { singleSoccer })
    })
})





//get all 

soccerRouter.get('/soccer', (req, res) => {
  soccerApi.getAllSoccers()
    .then((allSoccers) => {
      console.log(allSoccers)
      //res.json(allSoccers)
      res.render('template/allSoccers', { allSoccers })
    })
})



// get one
soccerRouter.get('/soccer/:id', (req, res) => {
  soccerApi.getSingleSoccer(req.params.id)
    .then((singleSoccer) => {
      // res.json(singleSoccer)
      res.render('template/singleSoccer', { singleSoccer })
    })
    .catch((err) => {
      res.send(err)
    })
})



// create soccer 
soccerRouter.post('/soccer', (req, res) => {
  soccerApi.createSoccer(req.body)
    .then((createdSoccer) => {
      //res.json(createdSoccer)
      res.redirect('/soccer')

    })
})
soccerRouter.get('/soccer/new', (req, res) => {
  res.render('template/createSoccerForm')
})



// update soccer
soccerRouter.put('/soccer/:id', (req, res) => {
  soccerApi.updateSoccer(req.params.id, req.body)
    .then((updatedSoccer) => {
      // res.json(updatedSoccer)
      res.redirect(`/soccer/${req.params.id}`)
    })

})

//delete soccer
soccerRouter.delete('/soccer/:id', (req, res) => {
  soccerApi.deleteSoccer(req.params.id)
    .then((deletedSoccer) => {
      //res.json(deletedSoccer)
      res.redirect('/soccer')
    })

})












module.exports = {
  soccerRouter
}
