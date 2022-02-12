const express = require('express')
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

//routing
route.get('/',services.homeRoutes);

route.get('/user',services.user);

route.get('/hospital',services.hospital);

route.get('/new_user',services.new_user);

//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);

module.exports = route
