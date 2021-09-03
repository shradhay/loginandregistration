import React from 'react'
import "./homepage.css"
function Homepage({setLoginUser}) {
    return (
        <div className="homepage">
            <h1>Hello Home page</h1>
            <div className="logout" onClick={()=>setLoginUser({})}>Logout</div>
            
        </div>
    )
}

export default Homepage;
