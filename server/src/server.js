const express = require("express");
const bodyParser = require("body-parser");
const {
  server: { port },
} = require("./config");
const { healthCheckController } = require("./controllers");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get(["/", "/health-check"], healthCheckController);

app.listen(port, console.log(`==server==> server listening on port ${port}`));
process.on("SIGTERM", () => {
  console.info("server -> SIGTERM signal received.");
});
