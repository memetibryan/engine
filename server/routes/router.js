const express = require('express')
const route = express.Router()

const services = require('../services/render');

const controlleruser = require('../controller/user');
const controllerhospital = require('../controller/hospital');
const controllerpatient = require('../controller/patient');

//routing
route.get('/',services.homeRoutes);

route.get('/user',services.user);

route.get('/hospital',services.hospital);

route.get('/patient',services.patient);

route.get('/new_user',services.new_user);

route.get('/new_patient',services.new_patient);

route.get('/new_hospital',services.new_hospital);

route.get('/donorspage',services.donorspage);

route.get('/donors',services.donors)

//USER API
route.post('/api/users',controlleruser.create);
route.get('/api/users',controlleruser.find);

//HOSPITAL API
route.post('/api/hospitals',controllerhospital.create);
route.get('/api/hospitals',controllerhospital.find);

//PATIENT API
route.post('/api/patients',controllerpatient.create);


module.exports = route
