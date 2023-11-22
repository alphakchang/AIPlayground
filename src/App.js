import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundParticles from './components/BackgroundParticles/BackgroundParticles';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Tools from './components/Tools/Tools';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  const proxy = 'https://naga.alphacrc.com';

  return (
    <div>
      <div className="back">
        <BackgroundParticles />
      </div>
      <Navigation />
      <div className="container-lg">
        <About />
        <Tools proxy={proxy}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
