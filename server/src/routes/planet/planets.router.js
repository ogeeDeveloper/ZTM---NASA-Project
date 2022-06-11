const express = require('express')

const {httpGetAllPlanets} = require("./planets.controller")

// Create a router 
const planetRouter = express.Router()

// Get all planets when on the "/planets" route
planetRouter.get('/planets', httpGetAllPlanets)

module.exports = planetRouter