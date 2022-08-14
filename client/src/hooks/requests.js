const API_URL = "http://localhost:8000";
const axios = require("axios");

async function httpGetPlanets() {
  const response = await axios.get(`${API_URL}/planets`);
  return response.data;
}

async function httpGetLaunches() {
  const response = await axios.get(`${API_URL}/launches`);
  return response.data.sort((a, b) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
  try {
    return await axios.post(`${API_URL}/launches`, JSON.stringify(launch), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
    return {
      status: false,
    };
  }
}

async function httpAbortLaunch(id) {
  try {
    return await axios.delete(`${API_URL}/launches/${id}`);
  } catch (err) {
    return {
      status: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
