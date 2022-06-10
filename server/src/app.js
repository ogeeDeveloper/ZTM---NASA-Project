const express = require("express")
const cors = require("cors")
const path = require("path")

//Import the plkanetsRouter to get all routes related to the planet route
const planetRouter = require('./routes/planet/planets.router')

// Request first comes in the app
const app = express()

app.use(cors({
    origin:"http://localhost:3000",
}))
// Checks for JSON data
app.use(express.json())
// middleware to serve all our public files
app.use(express.static(path.join(__dirname, '..', 'public')))
//Handles all pllanets routes
app.use(planetRouter)
// set the "/" to load the launch route so that the user doesnt have to type index.html
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app