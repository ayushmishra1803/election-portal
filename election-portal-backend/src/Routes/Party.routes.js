const express = require("express");
const PartyRoutes = new express.Router();
const PartyModel = require("../Models/party.model");
PartyRoutes.post(`/create-party`, async (req, res) => {
  try {
    const party = new PartyModel({...req.body,approved:false});
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
PartyRoutes.get(`/parties`,async(req,res)=>{
  try{
  
    const parties=await PartyModel.find(req.query).populate("party_admin")
    if(!parties){
      throw new Error("Parties not fetched")
    }
    res.status(200).send({
      message:"Parties fetched",data:parties
    })
  }catch(err){
    res.status(400).send({message:err.message})
  }
})
PartyRoutes.patch('/add-member/:memberId',async(req,res)=>{
  try{
    const {memberId}=req.params
    console.log(memberId);
  }catch(err){}
})
module.exports = PartyRoutes;
