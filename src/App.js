import React from 'react';
import About from './components/About';
import Developers from './components/Developers';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Subscriber from './components/Subscriber';


const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Developers />
        <Subscriber />
        <Footer />
    </div>
  )
}

export default App;