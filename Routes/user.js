const express=require('express')

const route=express.Router();

const {User,validateUser}=require('../Models/user')


route.get('/',async(req,res)=>{
    const result=await User.find();
    res.send(result)
})

route.post('/',async(req,res)=>{
    //check req body
    const {error}=validateUser(req.body);
    if(error){
        return res.status(400).send(error)
    }

    //check if user exist 


   
        
        
        user=new User({
            name:req.body.name,
            Contact:req.body.Contact,
            BloodType:req.body.BloodType,
            Address:req.body.Address
        })
       
        await user.save()
        
        res.send();


   
    
})

module.exports=route