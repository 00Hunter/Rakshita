const express=require('express');
const app=express();
const mongoose=require('mongoose')

const user=require('./Routes/user')
const orders=require('./Routes/order')




mongoose.connect('mongodb://localhost/BloodBank')
    .then(()=>{console.log("Connected to mongodb")})
    .catch(()=>{console.log("Cannot connect to mongodb")})



app.use(express.json());


app.use('/api/bloodbank',user)
app.use('/api/Order',orders)








const port=process.env.PORT||3000;
app.listen(port,()=>{console.log(`Listining to port${port}`)})



