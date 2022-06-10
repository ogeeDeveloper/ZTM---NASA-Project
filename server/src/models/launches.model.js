const launches = new Map()

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

module.exports={
    launches,
}