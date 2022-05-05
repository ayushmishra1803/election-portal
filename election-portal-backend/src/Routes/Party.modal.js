const express = require("express");
const PartyRoutes = new express.Router();
const PartyModel = require("../Models/party.model");
PartyRoutes.post(`/create-party`, async (req, res) => {
  try {
    const party = new PartyModel(req.body);
    if (!party) {
      throw new Error("Party not created");
    }
    const saved = await party.save();
    if (!saved) {
      throw new Error("Party not created");
    }
    res.status(200).send({
      message: "Party created",
      data: party,
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
module.exports = PartyRoutes;
