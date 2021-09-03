import React,{useState} from 'react'
import "./login.css"
import "../homepage/Homepage"
import axios from "axios"
import {useHistory} from "react-router-dom"
function Login({setLoginUser}) {
    const history =useHistory();
    const [user, setsUser] = useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
       const  {name,value} = e.target;
       setsUser({
           ...user,
           [name]:value

       })

    }
    const login=()=>{
        axios.post("http://localhost:9002/login",user)
        .then((res)=>{
           alert(res.data.message)
           setLoginUser(res.data.user)
           history.push("/")
        })

    }
    return (
        <div className="login">
            {console.log(user)}
            
            <h2>Login</h2>
            <input type="email" placeholder="Enter your Email" name="email" value={user.email} onChange={handleChange}/>
            <input type="password" placeholder="Enter your password" name="password" value={user.password} onChange={handleChange}/>
            <div className="button" onClick={login}>Login </div>
            <div>OR</div>
            <div className="button" onClick={()=>history.push("/register")}>Register</div>
        </div>
    )
}

export default Login
