const express=require('express')
const AuthRoutes=express.Router();
AuthRoutes.post('/login/:userType',async(req,res)=>{
    try{
        const {userType}=req.params
        const {email,password}=req.body
        
    }catch(err){}
})
module.exports=AuthRoutes