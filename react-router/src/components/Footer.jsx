import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 md:h-60 bg-black text-white py-4 w-full mt-auto">
      <div className="container mx-auto flex flex-col gap-2 md:flex-row justify-between items-center">
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://www.linkedin.com/in/pratham-mhavale/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors ease-in-out duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Victorblade38"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors ease-in-out duration-300"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors ease-in-out duration-300"
          >
            Twitter
          </a>
        </div>
        <p className="text-sm">© 2024 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
