import React from 'react';
import Header from './Header';
import './ButtonStyles.css';

const Home = () => {
  const toggleResume = (e) => {
  e.preventDefault(); 
  const resumeUrl = '/Resume.pdf';
  window.open(resumeUrl, '_blank');
};

  return (
    <div className="min-h-screen min-w-screen bg-[#000000] text-white">
      <Header />

      <section id='Home' className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div className="text-4xl -translate-y-10">
          <h1 className="font-bold text-white">
            <span className="text-blue-600">He</span>llo
          </h1>
          <h2 className="text-5xl font-bold mt-4">
            <span className="text-blue-600">I</span>'m A
            <span className="text-blue-600">n</span>athi J
            <span className="text-blue-600">u</span>ta
            <span className="text-blue-600">,</span>
          </h2>
          <p className="text-gray-300 mt-4">Full stack web developer</p>
          
          <div className='butt mt-6'>
            <button className="blue-button" onClick={toggleResume}>
              Download CV
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 relative -translate-x-12 -translate-y-9 before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:blur-3xl before:opacity-30 before:scale-120">
          <img
            src="./photos/robot.png"
            alt="Hero"
            className="w-full max-w-md mx-auto md:mx-0 relative z-10"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
