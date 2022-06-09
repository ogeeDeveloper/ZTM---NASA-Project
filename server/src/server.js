const http = require("http")
const app = require("./app")
const { loadPlanetsData } = require("./models/planets.model")

const PORT = process.env.PORT || 8000
const server = http.createServer(app)

const startServer = async()=>{
    // This will load the data before the server starts listening and starts to response to request
    await loadPlanetsData()

    server.listen(PORT, ()=>{
        console.log(`Listeing on port ${PORT}...`)
    })
}

startServer()