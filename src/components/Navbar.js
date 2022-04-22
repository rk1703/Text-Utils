import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  if(props.mode==='dark'){
    var navstyle={
      backgroundColor:'black'
    }
  } 
  else{
    navstyle={
      backgroundColor:'#9eaae6' 
    }
  }
    return (
    <>  
      <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={navstyle}>
  <div className="container-fluid">
    <Link className="navbar-brand " to="/">TextUtils</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${props.homeactive}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${props.aboutactive}`} to="/about">About</Link>
        </li>
     </ul>

      <div className={`form-check form-switch text-${props.mode=== 'light'? 'Dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btntext}</label>
      </div>

    </div>
  </div>
</nav>
      
    </>
    )
};
