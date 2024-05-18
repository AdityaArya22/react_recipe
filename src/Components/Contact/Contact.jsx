import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" rows="4" className="mt-1 block w-full p-2 border border-gray-300 rounded-md"></textarea>
          </div>
          <div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
