import React,{useState} from "react"
import {BrowserRouter as Router,Route} from "react-router-dom"

//light dark mood

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./darkLightMood/theme"
import { GlobalStyles } from './darkLightMood/global'


import Hedder from "./components/layout/header"
import DashBord from "./components/dashBord";
import AddClient from "./components/clint/addClient";
import EditClient from "./components/clint/EditClient"



const App = ()=>{
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
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
                    <Route path="/" exact component={DashBord} />
                    <Route path="/clint/edit/:id" exact component={EditClient} />
                    <Route path="/client/add" component={AddClient} />
                </div>
            </Router>
    </ThemeProvider>
    </>
  )
}

export default App;