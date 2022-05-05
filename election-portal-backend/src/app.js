const express = require("express");
require("./db/db");
const app = express();
const cors = require("cors");
const UserRoutes=require('./Routes/user.route')
app.use(express.json())
app.use(cors());
app.use(UserRoutes)
app.listen(3000, () => {
  console.log("Server is running");
});
