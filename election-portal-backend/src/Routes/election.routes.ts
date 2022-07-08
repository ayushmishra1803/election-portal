const express = require("express");
const electionRoutes = new express.Router();
const electionModel = require("../Models/election.model");
const adminMiddleWare = require("../middleware/Admin-middleware");

electionRoutes.post("/election", adminMiddleWare, async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {}
});

module.exports = electionRoutes;
