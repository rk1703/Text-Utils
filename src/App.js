// import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textforms from "./components/Textforms";
import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
 const [Mode,setMode] =useState('light');
 const [btntext,setBtnText] =useState('Enable DarkMode')
 const togglemode = ()=>{
   if(Mode==='light'){
     setMode('dark');
     setBtnText('Enable LightMode');
     document.body.style.backgroundColor='#063956';
    }
    else {
      setMode('light');
      setBtnText('Enable DarkMode');
      document.body.style.backgroundColor='white';
   }
 };

 if(window.location.pathname==='/about'){
   var isaboutactive='active';
   var ishomeactive='';
   
  }
  else if(window.location.pathname==='/'){
    isaboutactive='';
    ishomeactive='active';
}

  return (
    <>
      <Router>
        <Navbar mode={Mode} togglemode={togglemode} btntext={btntext} homeactive={ishomeactive} aboutactive={isaboutactive}/>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/">
            <Textforms mode={Mode}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
