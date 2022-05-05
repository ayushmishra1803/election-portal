const express=require('express')
const AdminRoutes=new express.Router();
//* Party Approvals
AdminRoutes.patch('/party-approvals/:id',async(req,res)=>{
    try{
        console.log(req.params);
    }catch(err){}
})
module.exports=AdminRoutes