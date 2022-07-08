const mongoose = require(`mongoose`);
const electionSchema = new mongoose.Schema({
  election_title: {
    type: String,
    required: true,
  },
  valid_upto: {
    type: String,
    required: true,
  },
  participant: [
    {
      partyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Party",

        unique: true,
      },
      totalVote: {
        type: Number,
        required: true,
      },
    },
  ],
  userVoted: [{
    userId:{ type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },}
  ],
});
const electionModel = new mongoose.model("election", electionSchema);
module.exports = electionModel;
