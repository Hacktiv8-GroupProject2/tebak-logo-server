'use strict'
const express = require('express');
const Routes = express.Router()
const LogoController = require('../controllers/LogoController');

Routes.get('/logos', LogoController.getLogos);

module.exports = Routes