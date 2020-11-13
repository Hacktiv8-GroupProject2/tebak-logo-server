'use strict'
const express = require('express');
const UserController = require('../controllers/UserController');
const UserRoutes = express.Router()

UserRoutes.get("/",UserController.index)
UserRoutes.post("/login",UserController.login)
UserRoutes.post("/register",UserController.register)

module.exports = UserRoutes
