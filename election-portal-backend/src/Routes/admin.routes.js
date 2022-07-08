const express = require("express");
const AdminRoutes = new express.Router();
const PartyModel = require("../Models/party.model");
const adminMiddleWare = require("../middleware/Admin-middleware");
const userMiddleware = require("../middleware/User-Auth-Middleware");
const electionModel = require("../Models/election.model");
//* Party Approvals
AdminRoutes.patch("/party-approvals/:id", async (req, res) => {
  try {
    const { id } = req.params;
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

/* create election */

AdminRoutes.post("/election", adminMiddleWare, async (req, res) => {
  try {
    console.log(req.body);
    const election = new electionModel({ ...req.body });
    const saved = await election.save();
    if (!saved) {
      throw new Error("Election not created");
    }
    res.status(200).send({
      message: "Election Created",
      data: election,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});
AdminRoutes.post("/vote", userMiddleware, async (req, res) => {
  try {
    const election = await electionModel.findById(req.body.electionId);

    let updatedVoted = [...election.participant];
    updatedVoted = updatedVoted.map((data) =>
      data.partyId.equals(req.body.votedTo)
        ? { ...data, totalVote: data.totalVote + 1 }
        : { ...data }
    );
    election.participant = updatedVoted;
    election.userVoted.push({ userId: req.user._id });

    const saved = await election.save();
    if (!saved) {
      /* error */
      console.log("error");
    }
    res.status(200).send({
      message: "Vote added",
      data: election,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

AdminRoutes.get("/election", async (req, res) => {
  try {
    const election = await electionModel.find();
    if (!election) {
      throw new Error("Election not found");
    }
    res.status(200).send({
      message: "Election Fetched",
      data: election,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
module.exports = AdminRoutes;
