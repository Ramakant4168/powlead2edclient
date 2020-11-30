import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Router from './Router';

import './App.css'

const NavigationBar = () =>  (

<nav className="navbar navbar-default header">
  <div className="container-fluid">
    <div className="navbar-header">
      <label style={{color:'cornflowerblue'}} className="navbar-brand" >powLead2ed</label>
    </div>
    <ul className="nav navbar-nav">
      <li><NavLink style={{color:'cornflowerblue'}} to='/'>Search</NavLink></li>
      <li ><NavLink  style={{color:'cornflowerblue'}} to='/resource'>Resources</NavLink></li>
    </ul>
  </div>
</nav>

);

class App extends Component {
  render() {
    return (
      <div  style={{display:'flex', flexDirection: 'column'}}>
        <div style={{display:'flex'}} ><NavigationBar/></div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:55 }} >
          <Router/>
        </div>  
      </div>
    )
  }
}

export default App;
