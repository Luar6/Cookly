import React from "react";
import './Nav.css'

export default props =>
    <div className="container-fluid">  
        <nav className="navbar">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul>
                                <li><a href="#" className="dropdown-item"></a>Home</li>
                                <li><a href="#" className="dropdown-item"></a>Sign In</li>
                                <li><a href="#" className="dropdown-item"></a>Sign Up</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>