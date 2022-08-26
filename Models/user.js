const mongoose=require('mongoose');
const Joi=require('joi')



const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:15
    },
    Contact:{
        type:String,
        required:true,
        maxlength:12,
        
    },
    BloodType:{
        type:String
    },
    Address:{
        type:String,
        required:true,
        maxlength:50,
    }

});


const User=new mongoose.model('User',userSchema )

// add verifictaion of emailusng code

function validateUser(user){
    const schema=Joi.object({  
        name:Joi.string().max(15).min(5).required(),
        Contact:Joi.string().max(12).required(),
        BloodType:Joi.string().required(),
        Address:Joi.string().max(50).required()
    })
  
    return schema.validate(user)
}
exports.validateUser=validateUser;
exports.User=User;