import React from "react";
import Register from "../Register";
import Login from "../Login";
import Home from "../Home";
import { Route, Routes } from "react-router-dom";
import { myContext } from "../context";
import { useState } from "react";

const Router = ()=>{
    const [formData, setFormData] = useState([{
        username: '',
        email: '',
        password: ''
      }]);
      const state ={formData,setFormData}    
    return(
        <div>
         <myContext.Provider value={state} >

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                

            </Routes>
            </myContext.Provider>

        </div>
    )
}
export default Router