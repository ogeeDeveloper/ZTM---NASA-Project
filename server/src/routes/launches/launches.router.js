const express = require("express")
const {httpGetAllLaunches} = require("./launches.controller")

const launchesRouter = express.Router()

// This route will fetch all launches
launchesRouter.get('/launches', httpGetAllLaunches)

module.exports = {
    launchesRouter,
}