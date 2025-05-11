
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const skills = [
    { name: 'React', value: 90 },
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 89 },
    { name: 'JS', value: 89 },
    { name: 'Tailwind', value: 89 },
  ];

  return (
    <section id='about'
      ref={ref}
      className="bg-black text-white px-6 py-12 md:px-24 flex flex-col md:flex-row items-center gap-12"
    >
      
      <motion.div
        className="w-[400px] md:w-1/2 flex justify-center relative -translate-x-25"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <img
          src="/photos/iirobot.png"
          alt="Robot"
          className="w-[700px] md:w-[370px] object-contain"
        />
       
      </motion.div>

    
      <motion.div
        className="w-full md:w-1/2 translate-y-29"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl text-blue-500 font-bold mb-4">About Me</h2>
        <p className="mb-4">
          Hey! I'm <span className="text-white font-semibold">Anathi Juta</span>, a passionate{' '}
          <span className="text-blue-400 font-bold ">web developer</span> currently finishing my Diploma in IT at Belgium Campus. I love building sleek, functional websites and exploring the creative side of code.
        </p>

      
        <h3 className="text-sm text-blue-500 font-semibold mt-6">Skills:</h3>
        <div className="space-y-2 mt-2">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm">
                <span>{index + 1}. {skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded overflow-hidden">
                <motion.div
                  className="h-2 bg-blue-500 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${skill.value}%` : 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
