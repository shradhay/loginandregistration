import React,{useState} from 'react'
import "./register.css"
function Register() {
    const [user, setUser] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""
        
    })
    const handleChange = e =>{
        
        
        const {name,value}= e.target;
        console.log(name,value)
        setUser({
            ...user,
            [name]:value

        })

      
      

    }
    return (
        <div className="register">
            {console.log(user)}
            <h1>Register page</h1>
            <input type="text" placeholder="FirstName" name="firstname" value={user.firstname} onChange={handleChange} />
            <input type="text" placeholder="LastName" name="lastname" value={user.lastname} onChange={handleChange}/>
            <input type="text" placeholder="Enter Your Email address" name="email" value={user.email} onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
            <input type="password" placeholder="confirmpassword" name="confirmpassword" value={user.confirmpassword} onChange={handleChange}/>
            <div className="button">Register </div>
            <div>OR</div>
            <div className="button">Login</div>

        </div>
    )
}

export default Register
