const express = require("express");
const serverConfig = require("./config/server.config");
const apiRoutes = require("./routes/index");
const dbConnection = require("./config/db.config");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models");
app.use(bodyParser.json());
app.use("/api/v1", apiRoutes);

const init = async () => {
  await dbConnection.sync({ force: true });
  insertCategories();
  insertRoles();
};

let insertCategories = async () => {
  await db.category.bulkCreate([
    {
      name: "Fashion",
    },
    {
      name: "Mobile",
    },
    {
      name: "Electronics",
    },
    {
      name: "Appliances",
    },
  ]);
};

const insertRoles = async () => {
  db.roles.bulkCreate([
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
