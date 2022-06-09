const express = require("express")
const cors = require("cors")

//Import the plkanetsRouter to get all routes related to the planet route
const planetRouter = require('./routes/planet/planets.router')

// Request first comes in the app
const app = express()

app.use(cors({
    origin:"http://localhost:3000",
}))
// Checks for JSON data
app.use(express.json())
//Handles all pllanets routes
app.use(planetRouter)

module.exports = app