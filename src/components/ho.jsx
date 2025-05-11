import React from 'react';
import Header from './Header';
import RobotImage from '../assets/robot.png'; 

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <Header />

      
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
       
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-white">
            Hello<span className="text-blue-500">,</span>
          </h1>
          <h2 className="text-3xl font-bold mt-4">
            I'm <span className="text-white">Anathi</span> <span className="text-blue-500">Juta</span>
          </h2>
          <p className="text-gray-300 mt-4">Full stack web developer</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Download CV
          </button>
        </div>

        
        <div className="mt-10 md:mt-0 relative">
          <img
            src={RobotImage}
            alt="Robot"
            className="w-80 h-auto drop-shadow-[0_0_50px_#00f2ff]"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
