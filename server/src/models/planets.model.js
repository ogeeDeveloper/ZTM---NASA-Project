const {parse} = require('csv-parse');
const fs = require('fs');
const path = require("path")

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

/*
--Creating a new Promise--
const promise = new Promise((resolve, reject)=>{
    resolve(100)
})
then call the promise like so:
promise.then(result=>{

})

then await the result from the promise
const result = wait promise

NB: This promise will block our code from sending any other request before completing this execution
*/
const loadPlanetsData = async()=>{
    // This promise is used to check and tell us when the planets have been succsfully loaded
    return new Promise((resolve, reject)=>{
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
        .pipe(parse({
            comment: '#',
            columns: true,
        }))
        .on('data', (data) => {
            if (isHabitablePlanet(data)) {
            habitablePlanets.push(data);
            }
        })
        .on('error', (err) => {
            console.log(err);
            reject(err)
        })
        .on('end', () => {
            console.log(`${habitablePlanets.length} habitable planets found!`);
            resolve()
        });
    })
}


module.exports = {
    loadPlanetsData,
    planets: habitablePlanets,
}