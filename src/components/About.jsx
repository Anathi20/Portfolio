const About = () => {
    return (
      <section id='about'className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        
        <p className="text-lg mb-6">
          Hey! I'm Anathi Juta, a passionate web developer currently finishing my Diploma in IT at Belgium Campus. 
          I love building sleek, functional websites and exploring the creative side of code.
        </p>
        
        <div className="border-t border-gray-300 my-6"></div>
        
        <h2 className="text-2xl font-semibold mb-4">Skills:</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {['React', 'HTML', 'CSS', 'JS', 'Tailwind', 'Git', 'Netlify'].map((skill) => (
            <li key={skill} className="flex items-center">
              <span className="mr-2">•</span> {skill}
            </li>
          ))}
        </ul>
        
        <div className="border-t border-gray-300 my-6"></div>
        
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-medium">Share</h3>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-black">Design</button>
            <button className="text-gray-600 hover:text-black">Prototype</button>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-600">Design</p>
            <p className="text-gray-400">Prototype</p>
            <p className="text-xl font-bold">46%</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-600">Page</p>
            <p className="text-xl font-bold">IEEE</p>
            <p className="text-green-500">100%</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-600">Variables</p>
            <p className="text-xl font-bold">$↑</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-600">Styles</p>
            <p className="text-xl font-bold">+</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-600">Export</p>
            <p className="text-xl font-bold">+</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;