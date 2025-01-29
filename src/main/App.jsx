import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Logo from '../../src/app/main/logo/Logo.jsx'
import Nav from '../../src/app/main/nav/Nav.jsx'
import Content from '../../src/app/main/content/Content.jsx'
import Footer from '../../src/app/main/footer/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Logo/>
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
