import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Logo from './main/logo/Logo.jsx'
import Nav from './main/nav/Nav.jsx'
import Content from './main/content/Content.jsx'
import Footer from './main/footer/Footer.jsx'
import Header from './main/header/Header.jsx'

function App() {
  return (
    <div className="app">
    <Logo/>
    <Header/>
    <Nav/>
    <Content/>
    <Footer/>
</div>
  );
}

export default App;
