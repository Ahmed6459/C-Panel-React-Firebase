import React,{useState} from "react"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

//light dark mood

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./darkLightMood/theme"
import { GlobalStyles } from './darkLightMood/global'


import Hedder from "./components/layout/header"
import DashBord from "./components/dashBord";
import AddClient from "./components/clint/addClient";
import EditClient from "./components/clint/EditClient"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"



const App = ()=>{
  const [theme, setTheme] = useState( window.localStorage.getItem('theme'));
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light');
    }
  }
  return(
    <>
    <ThemeProvider theme={theme==="light"?lightTheme:darkTheme}>
      <GlobalStyles/>
            <Router>
          <Hedder toggleTheme={toggleTheme} theme={theme} />
                <div className="container mt-5">
                <switch>
                    <Route path="/" exact component={DashBord} />
                    <Route path="/clint/edit/:id" exact component={EditClient} />
                    <Route path="/client/add" component={AddClient} />
                    <Route path="/login" component={Login} />
                    <Route path="/Signup" component={Signup}/>
                </switch>
                </div>
            </Router>
    </ThemeProvider>
    </>
  )
}

export default App;