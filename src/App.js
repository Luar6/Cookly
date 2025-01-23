
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from '../src/templates/home/body/Body.jsx'
import Header from '../src/templates/home/header/Header.jsx'
import Footer from '../src/templates/home/footer/Footer.jsx'
import Logo from '../src/templates/home/logo/Logo.jsx'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className='app'>
          <Logo/>
          <Header/>
          <Body/>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>   
  );
}

export default App;
