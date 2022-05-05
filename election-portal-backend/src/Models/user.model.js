const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const bcryptjs=require('bcryptjs')
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
    required: true,unique:true
  },
  password: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
  },
});
UserSchema.pre('save',async function(next){
    const user=this;
    if(user.isModified('password')){
        user.password=await bcryptjs.hash(user.password,8)
    }
    next();
})
const UserModel = new mongoose.model("User", UserSchema);
module.exports=UserModel