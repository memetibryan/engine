const mongoose = require('mongoose')

//user model
var schema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  location: {
    type: String,
    require: true
  },
  telephone: {
    type: Number,
    unique: true
  }
})

const Patientdb = mongoose.model('patientdb', schema);
module.exports = Patientdb
