import React from "react";
import './Nav.css'

export default props => 
    <nav className="navbar">  
        <ul className="navbar-nav">
            <li className="nav-item"><a href="./" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="http://localhost:5000/login" className="nav-link">Sign In</a></li>
            <li className="nav-item"><a href="http://localhost:5000/cadastro" className="nav-link">Sign Up</a></li>
        </ul>   
    </nav>
    