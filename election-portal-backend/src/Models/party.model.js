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

    unique: true,
  },

 /*  members: [
    {
      position: {
        type: String,
        
      },
      UserId: {
        type: mongoose.Schema.Types.ObjectId,
        
        ref: "User",
        unique: true,
      },
      member_approved: {
        type: Boolean,
        
      },
    },
  ], */
  approved: {
    type: Boolean,
    required: true,
  },
});
const PartyModel = new mongoose.model("Party", PartySchema);
module.exports = PartyModel;
