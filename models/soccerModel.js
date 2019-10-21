const mongoose = require('./connection.js')



const soccerSchema = new mongoose.Schema({
 name: String,
 city: String,
 club: String,
 age: Number

})





module.exports = {
  getHelloWorldString
}
