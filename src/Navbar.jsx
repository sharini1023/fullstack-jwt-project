import React from 'react'
// import { Link } from 'react-router-dom'
function Navbar(){
  return (
    <nav className="navbar navbar-expand navbar-dark bg-white">
        <div className="container">
            <span className="navbar-nav">
                <a className="nav-link" to={"/"}>home</a>
                <a className="nav-link" to={"/login"}>login</a>
                <a className="nav-link" to={"/dashboard"}>dashboard</a>
            </span>
        </div>
    </nav>
  )
}

export default Navbar
