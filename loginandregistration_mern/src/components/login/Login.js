import React,{useState} from 'react'
import "./login.css"
function Login() {
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
    return (
        <div className="login">
            {console.log(user)}
            
            <h2>Login</h2>
            <input type="email" placeholder="Enter your Email" name="email" value={user.email} onChange={handleChange}/>
            <input type="password" placeholder="Enter your password" name="password" value={user.password} onChange={handleChange}/>
            <div className="button">Login </div>
            <div>OR</div>
            <div className="button">Register</div>
        </div>
    )
}

export default Login
