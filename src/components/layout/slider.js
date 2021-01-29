import React from "react";
import {Link}from "react-router-dom";
import {FaPlus} from "react-icons/fa"


const slider = ()=>{
    return(
        <Link to="/client/add" className="btn btn-success" >
            <FaPlus/>
            <span className="ml-2">New</span>
        </Link>
    )
}

export default slider