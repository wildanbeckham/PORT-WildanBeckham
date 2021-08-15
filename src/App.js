import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import About from './component/About';
import Project from './component/Project';
import Skill from './component/Skill';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Project />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
