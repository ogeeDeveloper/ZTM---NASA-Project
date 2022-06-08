const express = require('express')
const {getAllPlanets} = require("./planets.controller")

// Create a router 
const planetRouter = express.Router()

// Get all planets when on the "/planets" route
planetRouter.get('/planets', getAllPlanets)

module.exports = planetRouter