const express = require('express')
const route = express.Router()

const services = require('../services/render');
const controlleruser = require('../controller/user');
const controllerhospital = require('../controller/hospital');

//routing
route.get('/',services.homeRoutes);

route.get('/user',services.user);

route.get('/hospital',services.hospital);

route.get('/new_user',services.new_user);

route.get('/new_hospital',services.new_hospital);

route.get('/donor',services.donor);

//USER API
route.post('/api/users',controlleruser.create);
route.get('/api/users',controlleruser.find);

//HOSPITAL API
route.post('/api/hospitals',controllerhospital.create);
route.get('/api/hospitals',controllerhospital.find);

module.exports = route
