const {getAllLaunches} = require("../../models/launches.model")

// Function to retrieve all launmches from the launches model
const httpGetAllLaunches = (req, res)=>{
    // return res.status(200).json(Array.from(launches.values()))
    return res.status(200).json(getAllLaunches())
}

module.exports = {
    httpGetAllLaunches,
}