const mongoose = require('./connection.js')

const TeamSchema = new mongoose.Schema({
    name: String,
    yearfounded: Number,
    titleswon: Number
})

const TeamCollection = mongoose.model('Team', TeamSchema)

//get all 
const getAllTeams = () => {
    return TeamCollection.find({})
}

//get one
const getSingleTeam = (id) => {
    return TeamCollection.findById(id)
}

// create
const createTeam = (teamData) => {
    return TeamCollection.create(teamData)
}

//delete
const deleteTeam = (id) => {
    return TeamCollection.deleteOne({ _id: id })
}




module.exports = {
    getAllTeams,
    getSingleTeam,
    createTeam,
    deleteTeam
}