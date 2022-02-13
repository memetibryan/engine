const mongoose = require('mongoose')

//hospitals model
var schemaa = new mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  location:{
    type: String,
    require: true
  },
  date:{
    type: Date,
    require: true
  },
  telephone:{
    type: Number,
    unique: true
  }
})

const Hospitaldb = mongoose.model('hospitaldb',schemaa);
module.exports = Hospitaldb
