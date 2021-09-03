const mongoose=require('mongoose');
// Scheme define
const userSchema=new mongoose.Schema({
    firstname:{
        require:true,
        type:String
    },
    lastname:{
        require:true,
        type:String,

    },
    email:{
        require:true,
        type:String,
        Unique:true

    },
    password:{
        type:String,
        require:true,

    },
    confirmpassword:{
        type:String,
        require:true
    }



})
// Collection 

const UserData= new mongoose.model("UserData",userSchema);
// const result= await User.save();
// console.log(result)
UserData.save;

module.exports=UserData;