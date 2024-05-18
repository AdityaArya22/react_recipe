import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
