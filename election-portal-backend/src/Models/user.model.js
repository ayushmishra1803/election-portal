const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const bcryptjs = require("bcryptjs");
const jwt=require('jsonwebtoken')
const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
  },
  access_token: {
    type: String,
  },
});
UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcryptjs.hash(user.password, 8);
  }
  next();
});
UserSchema.statics.findByCred = async (email, password, userType) => {
  const user = await UserModel.findOne({ email: email, user_type: userType });
  if (!user) {
    throw new Error("User not fond");
  }
  const match = await bcryptjs.compare(password, user.password);
  if (!match) {
    throw new Error("Password invalid");
  }
  return user;
};
UserSchema.methods.generateToken=async function(){
  const user=this
  const token=await jwt.sign(
    { _id: user._id.toString() },
    "Election_portal"
  );
  user.access_token = token;
  const saved = await user.save();
  if (!saved) {
    throw new Error("PLease Try Again");
  }
  return token;
}
const UserModel = new mongoose.model("User", UserSchema);
module.exports = UserModel;
