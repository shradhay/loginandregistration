const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express();
// require ("./src/db/connection")
// require("./src/models/register.js")
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
// db connection
mongoose.connect("mongodb://localhost:27017/loginregistrationform",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("connection to database sucessfull...")
}).catch((e)=>{
    console.log("connection failed...")})
    // scheme define
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
    const User= new mongoose.model("User",userSchema);
// Routes
// app.get("/",(req,res)=>{
//     res.send({message:"hello"})

// })
app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    User.findOne({email: email},(err,user)=>{
        if(user)
        {
            if(password == user.password)
            {
                res.send({message:"login succesfully...",user:user})
            }
            else{
                res.send(" password did not match")
            }

        }
        else{
            res.send("user not registered...")

        }
    })
})
app.post("/register",(req,res)=>{
  const {firstname,lastname,email,password}=req.body;
  User.findOne({email:email},(err,user)=>{
      if(user)
      {
          res.send({message:"user already Register..."})

      }
      else{
        const user=new User({
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:password
        })
        user.save(err=>{
            if(err)
            {
                res.send(err)
            }
            else{
                res.send({message:"Register Successfully..plz Login Now"})
            }
        })

      }

  })
 

})
app.listen(9002,()=>{
    console.log("started at port 9002") 
})