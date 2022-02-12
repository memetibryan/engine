const mongoose = require('mongoose')

var schema = new mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  type:{
    type: String,
    require: true
  },
  location:{
    type: String,
    require: true
  },
  telephone:{
    type: Number,
    unique: true
  }
})

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb
