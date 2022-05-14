const express = require("express");
const UserModel = require("../Models/user.model");
const AuthRoutes = express.Router();
const Usermodel = require("../Models/user.model");
AuthRoutes.post("/login/:userType", async (req, res) => {
  try {
    const { userType } = req.params;
    const { email, password } = req.body;
    const user = await UserModel.findByCred(email, password, userType);
    if (!user) {
      throw new Error("invalid cred");
    }
    const token = await user.generateToken();
    if (!token) {
      throw new Error("invalid cred");
    }
    res.status(200).send({
      message: "Login successfull",
      data: {...user._doc,token:token},
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});
module.exports = AuthRoutes;