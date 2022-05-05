const mongoose = require("mongoose");
const PartySchema = new mongoose.Schema({
  party_name: {
    type: String,
    required: true,
    unique: true,
  },
  party_icon: {
    type: String,
    required: true,
  },
  slogan: {
    type: String,
    required: true,
  },
  party_admin: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  members: [
    {
      position: {
        type: String,
        required: true,
      },
      UserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    },
  ],
});
const PartyModel=new mongoose.model('Party',PartySchema)
module.exports=PartyModel