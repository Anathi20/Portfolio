// App.jsx
import React from 'react';
import Home from './components/Home';
import Skills from './components/skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Home/>
      <Skills/>
       <Projects/>
       <Contact/>
       <Footer/>
      
    </div>
  );
};


export default App;