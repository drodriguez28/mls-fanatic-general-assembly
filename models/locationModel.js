const mongoose = require('./connection.js')

const LocationSchema = new mongoose.Schema({
    park: String,
    streetnumber: Number,
    streetname: String,
    state: String,
    city: String,
    zipcode: Number
})

const LocationCollection = mongoose.model('Location', LocationSchema)

//get all 
const getAllLocations = () => {
    return LocationCollection.find({})
  }

  //get one
const getSingleLocation = (id) => {
    return LocationCollection.findById(id)
  }

// create
const createLocation = (locationData) => {
    return LocationCollection.create(locationData)
  }

//delete
const deleteLocation = (id) => {
    return LocationCollection.deleteOne({ _id: id })
  } 




module.exports ={
    getAllLocations,
    getSingleLocation,
    createLocation,
    deleteLocation
}




