const express = require('express')
const route = express.Router()

//routing
route.get('/',(req,res) =>{
  res.render('index');
})
route.get('/user',(req,res) =>{
  res.render('user');
})
route.get('/hospital',(req,res) =>{
  res.render('hospital');
})

module.exports = route
