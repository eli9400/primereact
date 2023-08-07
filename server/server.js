const express = require("express");
const app = express();
const chalk = require("chalk");
const logger = require("./morgan/loggerService");
const cors = require("./cors/cors");
app.use(logger);
app.use(cors);
app.use(express.json());

const { data } = require("./initialData/initialData.json");
app.get("/data", async (req, res) => {
  try {
    res.json(data);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});
app.listen(8181, () => {
  console.log(chalk.green("server start on port: 8181"));
});
