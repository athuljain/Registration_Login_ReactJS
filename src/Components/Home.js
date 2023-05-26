import React from "react";
import './Home.css'

import { useNavigate } from 'react-router-dom';


function Home(){
     
    const navigate=useNavigate()

    const LoginButtonClick=()=>{
        navigate('/login')
    }
    const RegButtonClick=()=>{
        navigate('/register')
    }

    return(
<div className="Home">
    <h1>Home</h1>
    <h2>welcome to our Website</h2>
    <button className="HomeLoginButton" onClick={LoginButtonClick} >Login</button>
    <button className="HomeRegButton" onClick={RegButtonClick} >Register</button>
</div>

    )
    
}
export default Home