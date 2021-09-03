import React,{useState} from 'react'
import "./register.css"
import axios from "axios"
import {useHistory} from "react-router-dom"
function Register() {
    const history =useHistory();
    const [user, setUser] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""
        
    })
    const handleChange = e =>{
        const {name,value}= e.target;
        //console.log(name,value)
        setUser({
            ...user,
            [name]:value

        })
    }
    const register=()=>{

        const {firstname,lastname,email,password,confirmpassword} = user
        if(firstname && lastname  && email && password && (password===confirmpassword))
        {
            // alert("posted")
            axios.post("http://localhost:9002/register",user)
            .then((res)=>{
                alert(res.data.message)
                history.push("/login")
               

            })

        }
        else{
            alert("Invalid input")
        }
      


    }
    return (
        <div className="register">
            {console.log(user)}
            <h1>Register page</h1>
            <input type="text" placeholder="FirstName" name="firstname" value={user.firstname} onChange={handleChange}/>
            <input type="text" placeholder="LastName" name="lastname" value={user.lastname} onChange={handleChange}/>
            <input type="text" placeholder="Enter Your Email address" name="email" value={user.email} onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
            <input type="password" placeholder="confirmpassword" name="confirmpassword" value={user.confirmpassword} onChange={handleChange}/>
            <div className="button" onClick={register}>Register </div>
            <div>OR</div>
            <div className="button" onClick={()=>history.push("/login")}>Login</div>

        </div>
    )
}

export default Register
