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

const Userdb = mongoose.model('userdb',schema);
const Hospitaldb = mongoose.model('hospitaldb',schemaa);

module.exports = Userdb
module.exports = Hospitaldb
