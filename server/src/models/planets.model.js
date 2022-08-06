const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");

const habitable_planets = [];

// Check if Habitable
const isHabitable = (planet) =>
  planet["koi_disposition"] === "CONFIRMED" &&
  planet["koi_insol"] > 0.36 &&
  planet["koi_insol"] < 1.11 &&
  planet["koi_prad"] < 1.6;

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.ReadStream(path.join(__dirname, "..", "..", "data", "kepler_data.csv"))
      .pipe(
        parse({
          comment: "#", // Mark comment character
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitable(data)) {
          habitable_planets.push(data);
        }
      })
      .on("err", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(habitable_planets.map((planet) => planet["kepler_name"]));
        resolve();
      });
  });
}

module.exports = {
  loadPlanetsData,
  planets: habitable_planets,
};
