const http = require("http");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

// Wait for models data to load
async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => console.log(`Listening on PORT ${PORT}....`));
}
startServer();
