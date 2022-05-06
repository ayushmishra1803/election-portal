const express = require("express");
const AdminRoutes = new express.Router();
const PartyModel = require("../Models/party.model");
//* Party Approvals
AdminRoutes.patch("/party-approvals/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const partyData = await PartyModel.findById(id);
    if (!partyData) {
      throw new Error("Party not found");
    }
    partyData.approved = true;
    const saved = partyData.save();
    if (!saved) {
      throw new Error("Party not approved");
    }
    res.status(200).send({ message: "Party Approved", data: partyData });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
module.exports = AdminRoutes;
