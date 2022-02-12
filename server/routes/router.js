const express = require('express')
const route = express.Router()
const services = require('../services/render');

//routing
route.get('/',services.homeRoutes);

route.get('/user',services.user);

route.get('/hospital',services.hospital);

module.exports = route
