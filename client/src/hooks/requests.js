const API_URL = "http://localhost:8000";
const axios = require("axios");

async function httpGetPlanets() {
  // .then((res) => console.log(res));
  const response = await axios.get(`${API_URL}/planets`);
  // const data =

  // console.log(`Fetched Planets ${data}`);

  return response.data;
  // TODO: Once API is ready.
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
