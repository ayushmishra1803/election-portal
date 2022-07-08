const express = require("express");
require("./db/db");
const app = express();
const cors = require("cors");
const UserRoutes = require("./Routes/user.routes");
const PartyRoutes = require("./Routes/Party.routes");
const AdminRoutes = require("./Routes/admin.routes");
const AuthRoutes = require("./Routes/auth.routes");
/* const electionRoutes = require('./Routes/election.routes'); */


app.use(express.json());
app.use(cors());
app.use(UserRoutes);
app.use("/parties", PartyRoutes);
app.use("/admin", AdminRoutes);
app.use("/auth", AuthRoutes);
app.listen(3000, () => {
  console.log("Server is running");
});
