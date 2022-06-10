const express = require("express")
const {getAllLaunches} = require("./launches.controller")

const launchesRouter = express.Router()

// This route will fetch all launches
launchesRouter.get('/launches', getAllLaunches)

module.exports = {
    launchesRouter,
}