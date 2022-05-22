const express = require("express");
const PartyRoutes = new express.Router();
const PartyModel = require("../Models/party.model");
const AdminMiddleware = require("../middleware/Admin-middleware");
const PartAdminMiddleware = require("../middleware/party-admin-auth.middleware");
const GeneralMiddleware = require("../middleware/general.middleware");
const UserAuthMiddleware = require("../middleware/User-Auth-Middleware");
PartyRoutes.post(`/create-party`, async (req, res) => {
  try {
    const party = new PartyModel({ ...req.body, approved: false });
    if (!party) {
      throw new Error("Party not created");
    }
    const saved = await party.save();
    if (!saved) {
      throw new Error("Party not created");
    }
    res.status(200).send({
      message: "Party created, Waiting for Approval",
      data: party,
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
PartyRoutes.get(`/parties`, AdminMiddleware, async (req, res) => {
  try {
    const parties = await PartyModel.find(req.query).populate("party_admin");
    if (!parties) {
      throw new Error("Parties not fetched");
    }
    res.status(200).send({
      message: "Parties fetched",
      data: parties,
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
PartyRoutes.patch("/add-member/:memberId", async (req, res) => {
  try {
    const { memberId } = req.params;
    const partyDetails = await PartyModel.find({ party_admin: req.user._id });
    if (!partyDetails) {
      throw new Error("Party detials not found");
    }
  } catch (err) {}
});

//get party details
PartyRoutes.get(`/deatils`, GeneralMiddleware, async (req, res) => {
  try {
    const partyDetails = await PartyModel.find({ party_admin: req.user._id });
    if (!partyDetails) {
      throw new Error("User not a admin for any of the party");
    }
    res
      .status(200)
      .send({ message: "Party Details Fetched", data: partyDetails });
  } catch (err) {
    res.status(400).send({
      messgae: err.message,
    });
  }
});

//request to join party
PartyRoutes.patch(`/request/:partyId`, UserAuthMiddleware, async (req, res) => {
  try {
    console.log(req.params.partyId);
    const party = await PartyModel.find({ _id: req.params.partyId });
    const Alreadymember = await PartyModel.find({
      members: { $elemMatch: { UserId: req.user._id } },
    });
    if (Alreadymember.length > 0) {
      throw new Error("You are already a member of a party");
    } else {
      const member = {
        position: req.body.position,
        approved: false,
        UserId: req.user._id,
      };
      party[0].members.push(member);
      console.log(party);
    }
    const saved = party[0].save();
    if (!saved) {
      throw new Error("Request not send");
    }

    res.status(200).send({ message: "Request Send", data: party });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
//approve user
PartyRoutes.get(`/approve/:userId`, PartAdminMiddleware, async (req, res) => {
  try {
    console.log(req.params);
    const party=await PartyModel.find({party_admin:req.user._id})
   
     const updatedIndex=party[0].members.findIndex(member=>member.UserId == req.params.userId)
     console.log(party,updatedIndex);
     party[0].members[updatedIndex].approved=true 
        const saved=await party[0].save();
    if(!saved){
      throw new Error("Member not approved")
    }
    res.status(200).send({
      message:'Memeber approved to join party',data:party[0]
    })
   
  } catch (err) {
res.status(500).send({message:err.message})
  }
});
module.exports = PartyRoutes;
