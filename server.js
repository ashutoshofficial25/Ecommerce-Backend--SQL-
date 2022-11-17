const express = require("express");
const serverConfig = require("./config/server.config");
const apiRoutes = require("./routes/index");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/api/v1", apiRoutes);

app.listen(serverConfig.PORT, () => {
  console.log(`server started on port ${serverConfig.PORT}`);
});
