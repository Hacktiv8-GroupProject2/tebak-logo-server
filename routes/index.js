'use strict'
const express = require('express');
const UserRoutes = require('./users');
const Routes = express.Router()
const LogoController = require('../controllers/LogoController');

Routes.use('/users',UserRoutes)

Routes.get('/logos', LogoController.getLogos);

module.exports = Routes