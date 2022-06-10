const {launches} = require("../../models/launches.model")

// Function to retrieve all launmches from the launches model
const getAllLaunches = (req, res)=>{
    return res.status(200).json(Array.from(launches.values()))
}

module.exports = {
    getAllLaunches,
}