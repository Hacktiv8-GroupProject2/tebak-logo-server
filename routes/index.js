'use strict'
const express = require('express');
const UserRoutes = require('./users');
const Routes = express.Router()

Routes.use('/users',UserRoutes)

module.exports = Routes