const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/loginregistrationform",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("connection to database sucessfull...")
}).catch((e)=>{
    console.log("connection failed...")})