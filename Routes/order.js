const express=require('express')

const route=express.Router();

const {Order}=require('../Models/OrderDetails')


route.get('/',async(req,res)=>{
    const result=await Order.find();
    res.send(result)
})

route.post('/',async(req,res)=>{

            order=new Order({
            OrderId:req.body.Id,
            OrderDate:req.body.Date,
            OrderStatus:req.body.status,
            HospitalName:req.body.Hname,
            Ammout:req.body.ammount
        })
       
        await order.save()
        
        res.send();


   
    
})

module.exports=route