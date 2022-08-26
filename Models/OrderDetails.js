const mongoose=require('mongoose');
const Joi=require('joi')



const orderSchema=new mongoose.Schema({
    OrderId:{
        type:String,
        required:true,
        maxlength:15
    },
    OrderDate:{
        type:String,
        required:true,
        maxlength:12,
        
    },
    OrderStatus:{
        type:String
    },
    HospitalName:{
        type:String,
        required:true,
        maxlength:50,
    },
    Ammout:{
        type:String
    },


});


const Order=new mongoose.model('Orders',orderSchema )

// add verifictaion of emailusng code


exports.Order=Order;