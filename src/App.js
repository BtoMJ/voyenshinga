import './App.css';
import Home from './components/Home/Home';
import Logistica from './components/Logistica/Logistica';
import SameDay from './components/SameDay/SameDay';
import LogisticaOnDemand from './components/LogisticaOnDemand/LogisticaOnDemand';
import Contact from './components/Contact/Contact';

import 'animate.css';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <div className='NavContainer'>
        <Nav />
      </div>
      <Home />
      <Logistica />
      <SameDay />
      <LogisticaOnDemand />
      <Contact />
    </div>
  );
}

export default App;
