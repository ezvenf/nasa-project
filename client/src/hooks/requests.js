const API_URL = "http://localhost:8000";
const axios = require("axios");

async function httpGetPlanets() {
  const response = await axios.get(`${API_URL}/planets`);
  return response.data;
}

async function httpGetLaunches() {
  const response = await axios.get(`${API_URL}/launches`);
  console.log(response.data);
  return response.data.sort((a, b) => a.flightNumber - b.flightNumber);
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
