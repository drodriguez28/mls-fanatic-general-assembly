const express = require('express')


const locationApi = require('../models/locationModel.js')


const locationRouter = express.Router()



//create brother (this makes the create Location page)
locationRouter.get('/location/new', (req, res) => {
    res.render('template/createLocationForm')
  })



//get all 

locationRouter.get('/location', (req, res) => {
    locationApi.getAllLocations()
      .then((allLocations) => {
        console.log(allLocations)
        //res.json(allLocations)
        res.render('template/allLocations', { allLocations })
      })
  })