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
  console.log(JSON.stringify(launch));

  try {
    const response = await axios.post(
      `${API_URL}/launches`,
      JSON.stringify(launch),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response);
    return response;
  } catch (err) {
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
