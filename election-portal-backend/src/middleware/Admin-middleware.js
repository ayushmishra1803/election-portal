const jwt = require("jsonwebtoken");
const UserModel = require("../Models/user.model");
const AdminUserMiddleware = async (req, res, next) => {
    try {
        const token = req.header(`Authorization`).replace("Bearer ", "");
        const decode = await jwt.verify(token, "Election_portal");
    
        if (!decode) {
          throw new Error("Token expired, Please login again");
        }
        const user = await UserModel.findById({ _id: decode._id,user_type:'admin' });
        if (!user) {
          throw new Error("User not found");
        }
        req.user = user;
        next();
      } catch (err) {
        res.status(401).send({ message: "Invalid access token" });
      }
};
module.exports=AdminUserMiddleware