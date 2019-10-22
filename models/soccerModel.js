const mongoose = require('./connection.js')



const SoccerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
  club: String


})

const SoccerCollection = mongoose.model('Soccer', SoccerSchema)

//get all 
const getAllSoccers = () => {
  return SoccerCollection.find({})
}

//get one
const getSingleSoccer = (id) => {
  return SoccerCollection.findById(id)
}

// create
const createSoccer = (soccerData) => {
  return SoccerCollection.create(soccerData)
}

// updates
const updateSoccer = (id, soccerData) => {
  return SoccerCollection.updateOne({ _id: id }, soccerData)

}


//delete
const deleteSoccer = (id) => {
  return SoccerCollection.deleteOne({ _id: id })
}












module.exports = {
  getAllSoccers,
  getSingleSoccer,
  createSoccer,
  updateSoccer,
  deleteSoccer
}
