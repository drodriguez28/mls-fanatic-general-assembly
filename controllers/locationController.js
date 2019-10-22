const express = require('express')


const locationApi = require('../models/locationModel.js')


const locationRouter = express.Router()



//create brother (this makes the create Location page)
locationRouter.get('/new', (req, res) => {
    res.render('template/createLocationForm')
  })



//get all 

locationRouter.get('/', (req, res) => {
    locationApi.getAllLocations()
      .then((allLocations) => {
        console.log(allLocations)
        //res.json(allLocations)
        res.render('template/allLocations', { allLocations })
      })
  })


  // get one
locationRouter.get('/location/:id', (req, res) => {
    locationApi.getSingleLocation(req.params.id)
      .then((singleLocation) => {
        // res.json(singleLocation)
        res.render('template/singleLocation', { singleLocation })
      })
      .catch((err) => {
        res.send(err)
      })
  })

// create location 
locationRouter.post('/', (req, res) => {
    locationApi.createLocation(req.body)
      .then((createdLocation) => {
        // res.json(createdLocation)
        res.redirect('/location')
  
      })
  })
  locationRouter.get('/location/new', (req, res) => {
    res.render('template/createLocationForm')
  })


//delete location
locationRouter.delete('/location/:id', (req, res) => {
    locationApi.deleteLocation(req.params.id)
      .then((deletedLocation) => {
        //res.json(deletedLocation)
        res.redirect('/location')
      })
  
  })







  module.exports = {
    locationRouter
  }