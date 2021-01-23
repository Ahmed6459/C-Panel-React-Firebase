import React from "react"
import {BrowserRouter as Router,Route} from "react-router-dom"


import Hedder from "./components/layout/header"
import DashBord from "./components/dashBord";


const App = ()=>{
  return(
    <>
      <Hedder/>
      <Router>
        <div className="container mt-5">
            <Route path="/" exact component={DashBord} />
            <Route path="/clint/:id" exact component={DashBord} />
        </div>
      </Router>
    </>
  )
}

export default App;