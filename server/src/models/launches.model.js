const launches = new Map()
const latestFLightNumber = 100
const launch = {
    flightNumber: 1001,
    mission: "Kepler Exploration X",
    rocket: 'Explorer IS1',
    launchDate: new Date("January 13, 2025",),
    destination: "Kepler-422 b",
    customer: ["OgeeDev", "NASA", "SpaceX"],
    upcoming: true,
    success: true
}

// Push a launch into the launches MAP
launches.set(launch.flightNumber, launch)

// Get all launches
// launches.get()

// Build a Data Acess Layer for the launches
const getAllLaunches = ()=>{
    return Array.from(launches.values())
}

// Function to add a new launch
const addNewLaunch = launch =>{
    latestFLightNumber++
    // Set the launches based on the flight number
    launches.set(
        latestFLightNumber,
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customers: ["OgeeDeveloper", "NASA", "SpaceX"],
            flightNumber: latestFLightNumber,
        })
    )
}

module.exports={
    getAllLaunches,
    addNewLaunch,
}