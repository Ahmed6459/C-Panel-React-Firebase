import React from "react";
import Clint from "./clint/clint"
import Slider from "./layout/slider"


const DashBord = ()=>{
    return(
        <div id="dashboard">
            <div className="row">
                <div className="col-md-10">
                    <Clint/>
                </div>
                <div className="col-md-2">
                    <Slider/>
                </div>
            </div>
        </div>
    )
}

export default DashBord;