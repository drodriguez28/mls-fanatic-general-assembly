const express = require('express')


const teamApi = require('../models/teamModel.js')


const teamRouter = express.Router()



//create brother (this makes the create Location page)
teamRouter.get('/new', (req, res) => {
    res.render('template/createTeamForm')
})



//get all 

teamRouter.get('/', (req, res) => {
    teamApi.getAllTeams()
        .then((allTeams) => {
            console.log(allTeams)
            //res.json(allLocations)
            res.render('template/allTeams', { allTeams })
        })
})


// get one
teamRouter.get('/:id', (req, res) => {
    teamApi.getSingleTeam(req.params.id)
        .then((singleTeam) => {
            // res.json(singleTeams)
            res.render('template/singleTeam', { singleTeam })
        })
        .catch((err) => {
            res.send(err)
        })
})

// create team
teamRouter.post('/', (req, res) => {
    teamApi.createTeam(req.body)
        .then((createdTeam) => {
            // res.json(createdTeam)
            res.redirect('/team')

        })
})
teamRouter.get('/team/new', (req, res) => {
    res.render('template/createTeamForm')
})


//delete location
teamRouter.delete('/:id', (req, res) => {
    teamApi.deleteTeam(req.params.id)
        .then((deletedTeam) => {
            //res.json(deletedTeam)
            res.redirect('/team')
        })

})







module.exports = {
    teamRouter
}