const express=require('express');
const UserRoutes=new express.Router()
const UserModel=require('../Models/user.model')

UserRoutes.post(`/admin/sign-up`,async (req,res)=>{
  try{
      const user=new UserModel({...req.body,user_type:'admin'})
      if(!user){
          throw new Error("User was not saved")
      }
      const saved=await user.save()
      if(!saved){
          throw new Error("User was not saved")
      }
      res.status(201).send({
          message:"User created",data:user
      })
  }catch(err){
      res.status(400).send({message:err.message})
  }
})
UserRoutes.get(`/admin/users`,async(req,res)=>{
    try{
        const users=await UserModel.find({user_type:'admin'})
        if(!users){
            throw new Error("Users not found")
        }
        res.status(200).send({message:"Users fetched",data:users})
    }catch(err){
        res.status(400).send({message:err.message})
    }
})


UserRoutes.post(`/party/sign-up`,async (req,res)=>{
    try{
        const user=new UserModel({...req.body,user_type:'party_admin'})
        if(!user){
            throw new Error("User was not saved")
        }
        const saved=await user.save()
        if(!saved){
            throw new Error("User was not saved")
        }
        res.status(201).send({
            message:"User created",data:user
        })
    }catch(err){
        res.status(400).send({message:err.message})
    }
  })
  UserRoutes.get(`/party-admins`,async(req,res)=>{
    try{
        const users=await UserModel.find({user_type:'party_admin'})
        if(!users){
            throw new Error("Users not found")
        }
        res.status(200).send({message:"Users fetched",data:users})
    }catch(err){
        res.status(400).send({message:err.message})
    }
})
UserRoutes.post(`/sign-up`,async (req,res)=>{
    try{
        const user=new UserModel({...req.body,user_type:'user'})
        if(!user){
            throw new Error("User was not saved")
        }
        const saved=await user.save()
        if(!saved){
            throw new Error("User was not saved")
        }
        res.status(201).send({
            message:"User created",data:user
        })
    }catch(err){
        res.status(400).send({message:err.message})
    }
  })
  UserRoutes.get(`/users`,async(req,res)=>{
    try{
        const users=await UserModel.find({user_type:'user'})
        if(!users){
            throw new Error("Users not found")
        }
        res.status(200).send({message:"Users fetched",data:users})
    }catch(err){
        res.status(400).send({message:err.message})
    }
})
module.exports=UserRoutes