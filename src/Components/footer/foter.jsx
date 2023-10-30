import React from "react";
import { FaInstagram, FaTiktok,  FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full flex-col md:w-1/3 h-1/3 flex items-center md:block text-left">
          <img
            src="../assets/home/navbar/logo_Q-Spicy.png"
            alt="Logo de Q-spicy"
            className="w-20 h-20 mx-auto md:mx-0"
          />
          <div className="text-white font-semibold">Q - Spicy</div>
        </div>
        
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-center justify-center mt-4 md:mt-0">
          <div className="text-white font-semibold">Redes Sociales</div>
          <div className="flex items-center justify-center space-x-4 mt-2">
            <a href="#" className="text-[#E4405F] hover:text-white">
              <FaInstagram size={32} />
            </a>
            <a href="#" className="text-[#000] hover:text-white">
              <FaTiktok size={32} />
            </a>
            <a href="#" className="text-[#006567] hover:text-white">
              <FaTwitter size={32} />
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-end text-center mt-4 md:mt-0">
          <div className="mb-4">
            <h2 className="text-white font-semibold">Resources</h2>
            <ul className="mt-2 text-gray-400">
              <li>
                <Link to="/user-manual">Manual de usuario</Link>
              </li>
              <li>
                <Link to="/tailwind-css">Tailwind CSS</Link>
              </li>
              <li>
                <Link to="/react">React</Link>
              </li>
              <li>
                <Link to="/gcp">GCP</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold">Legal</h2>
            <ul className="mt-2 text-gray-400">
              <li>
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="text-center text-gray-400 mt-4">
  © 2023 QSpicy™. All Rights Reserved.
</div>

    </footer>
  );
}

export default Footer;
