import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again later.');
      });
  };

  return (
    <div className="contact-container relative">
      <div className="absolute inset-0 bg-gray-900"></div>
      <div className="relative flex flex-col items-center text-white p-8 mt-10">
        <div className="contact-info text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Crown Defence Security Ltd.</h2>
          <p>Email: <a href="mailto:info@crowndefencesecurity.co.uk" className="text-yellow-600 hover:text-yellow-500">info@crowndefencesecurity.co.uk</a></p>
          <p>Phone: <a href="tel:+441234567890" className="text-yellow-600 hover:text-yellow-500">+44 1234 567890</a></p>
          <p>Address: 123 Security St, London, UK</p>
        </div>

        <form className="contact-form bg-gray-800 p-8 rounded-lg w-full max-w-lg" onSubmit={handleSubmit}>
          <label htmlFor="name" className="block text-yellow-600 font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" required className="w-full p-2 mb-4 border border-yellow-600 rounded bg-gray-900 text-white focus:outline-none focus:border-yellow-500" />

          <label htmlFor="email" className="block text-yellow-600 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" required className="w-full p-2 mb-4 border border-yellow-600 rounded bg-gray-900 text-white focus:outline-none focus:border-yellow-500" />

          <label htmlFor="message" className="block text-yellow-600 font-bold mb-2">Message</label>
          <textarea id="message" name="message" rows="4" required className="w-full p-2 mb-4 border border-yellow-600 rounded bg-gray-900 text-white focus:outline-none focus:border-yellow-500"></textarea>

          <button type="submit" className="w-full py-2 px-4 bg-yellow-600 text-black font-semibold rounded hover:bg-yellow-500 transition duration-300">Send Message</button>
        </form>

        <div className="footer mt-8 text-yellow-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Crown Defence Security Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
