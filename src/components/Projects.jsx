import React from 'react';
import './ButtonStyles.css';

const projects = [
  {
    title: 'React BMW Project',
    description: 'An interactive React app showcasing BMW car models with detailed features and immersive views, designed for a sleek and user-friendly experience.',
    borderColor: 'border-cyan-400',
    glowColor: 'shadow-[0_0_20px_#22d3ee]',
    hoverGlowColor: 'hover:shadow-[0_0_30px_#22d3ee]',
    textColor: 'text-cyan-400',
    buttonBorderColor: 'border-cyan-400',
    imageUrl: '/photos/bmw.jpeg',
    viewUrl: 'https://anathi-s-projects.vercel.app/',
    sourceUrl: 'https://github.com/Anathi20/Anathi-s-Projects',
  },
  {
    title: 'Interactive Quiz App',
    description: 'An interactive quiz application that tracks scores and uses animations for transitions between questions.',
    borderColor: 'border-yellow-400',
    glowColor: 'shadow-[0_0_20px_#facc15]',
    hoverGlowColor: 'hover:shadow-[0_0_30px_#facc15]',
    textColor: 'text-yellow-400',
    buttonBorderColor: 'border-yellow-400',
    imageUrl: '/photos/JS.png',
    viewUrl: 'https://jsquiz2.netlify.app/',
    sourceUrl: 'https://github.com/Anathi20/Javascript-quiz',
  },
];

const ProjectCard = ({
  title,
  description,
  
  glowColor,
  hoverGlowColor,
  textColor,
  
  imageUrl,
  viewUrl,
  sourceUrl,
}) => (
  <div
    className={`rounded-2xl p-6 m-6 w-96 bg-black border-0 transition-all duration-300
       hover:${glowColor} ${hoverGlowColor}`}
  >
    <img
      src={imageUrl}
      alt={title}
      className="rounded-lg mb-4 w-full h-48 object-cover"
    />
    <h2 className={`text-center font-semibold text-xl mb-2 ${textColor}`}>{title}</h2>
    <p className={`text-sm mb-4 ${textColor} font-semibold`}>{description}</p>
    <div className="flex flex-col gap-3">
      <a
        href={viewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className='project-button'
      >
        View
      </a>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className='project-button'
      >
        Source Code
      </a>
    </div>
  </div>
);


const ProjectsSection = () => (
  <section id="projects" className="bg-black p-8 text-white">
    
    <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

    
    <div className="flex flex-wrap justify-center">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
