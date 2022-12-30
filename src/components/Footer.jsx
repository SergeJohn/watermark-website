import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-white mb-2">Contact</h3>
            <p className="text-sm text-gray-400 mb-2">
              Email: info@watermarktool.com
            </p>
            <p className="text-sm text-gray-400">Phone: +1 555 555 5555</p>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-white mb-2">Links</h3>
            <ul className="list-reset text-sm text-gray-400">
              <li className="inline-block mr-2 mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Pricing
                </a>
              </li>
              <li className="inline-block mr-2 mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Feedback
                </a>
              </li>
              <li className="inline-block mr-2 mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li className="inline-block mr-2 mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-white mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
