
import './App.css';
import './Media.css'
import React from 'react';
import Home from './hooks/Home';
import Navbar from './hooks/Navbar';
import Work from './hooks/Work';
import Project from './hooks/Project';
import Footer from './hooks/Footer';
import About from './hooks/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Work/>
      <Project/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
