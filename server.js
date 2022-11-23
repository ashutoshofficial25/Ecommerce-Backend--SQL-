const express = require("express");
const serverConfig = require("./config/server.config");
const apiRoutes = require("./routes/index");
const dbConnection = require("./config/db.config");
const Roles = require("./models/Roles");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/api/v1", apiRoutes);

const init = async () => {
  await dbConnection.sync({ force: true });
  insertRoles();
};

const insertRoles = async () => {
  Roles.bulkCreate([
    {
      id: 1,
      name: "user",
    },
    {
      id: 2,
      name: "admin",
    },
  ]);
};

app.listen(serverConfig.PORT, () => {
  console.log(`server started on port ${serverConfig.PORT}`);
  init();
});
