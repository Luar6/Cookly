import React from "react";
import './Nav.css'

export default props =>
    <div className="container-fluid">  
        <nav className="navbar">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Sign In</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Sign Up</a>
                    </li>
                </ul>     
            </div>  
        </nav>
    </div>