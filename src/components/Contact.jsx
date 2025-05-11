import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      message: formData.message
    };

    emailjs
      .send(
        'service_n8lis8h', 
        'template_g1mhy2f', 
        templateParams,
        '1n9oXTnDmQ9PywPPi' 
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          setStatus('Your message has been sent!');
        },
        (err) => {
          console.error('Failed to send email', err);
          setStatus('Failed to send your message. Please try again.');
        }
      );

    setFormData({
      fullName: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id='contact' className="bg-black text-white px-6 py-12 flex flex-col items-center">
     
      <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
        <span className="mr-2 text-blue-400">Contact</span> me
      </h2>

      
      <p className="mb-8 text-center">
        Let's work <span className="text-blue-400 font-semibold">together</span> or just say <span className="text-blue-400 font-semibold">hello</span>
      </p>

      
      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col space-y-4">
        
        <div className="flex items-center space-x-4">
          <label className="w-32 font-semibold text-sm">Full name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Insert your name here..."
            className="flex-1 p-3 rounded border border-blue-400 bg-black placeholder-blue-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

       
        <div className="flex items-center space-x-4">
          <label className="w-32 font-semibold text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Insert your Email here..."
            className="flex-1 p-3 rounded border border-blue-400 bg-black placeholder-blue-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        
        <div className="flex items-start space-x-4">
          <label className="w-32 pt-3 font-semibold text-sm">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="What do you want to say..."
            className="flex-1 p-3 rounded border border-blue-400 bg-black placeholder-blue-400 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

       
        <div className="button-container">
          <button type="submit" className="contact-button bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
            Send
          </button>
        </div>

         
        {status && <p className="mt-4 text-center text-lg">{status}</p>}
      </form>
    </section>
  );
};

export default ContactSection;
