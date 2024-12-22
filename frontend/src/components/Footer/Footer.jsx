import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Xlogo from '../../assets/logo-white.png';

function Footer() {
  return (
    <div className="mt-12 text-white/70 py-8 mx-10 lg:mx-28 border-t-2 border-gray-700 pt-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Name and Email Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl font-bold">Himank Kumar</h1>
          <div className="flex items-center space-x-2 mt-2">
            <FaEnvelope size={20} className="text-red-600" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=himanksingh1094@gmail.com&su=Hello%20Himank&body=I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 break-all"
            >
              himanksingh1094@gmail.com
            </a>
          </div>
          <div className="mt-2 text-sm text-white/50">
            © {new Date().getFullYear()} Himank Kumar. All rights reserved.
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center space-x-6">
          <a href="https://www.linkedin.com/in/himank-kumar-22039a253/">
            <FaLinkedin size={25} className="text-[#0A66C2]" />
          </a>
          <a href="https://x.com">
            <img src={Xlogo} alt="Logo" className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/himankkumar_7108/">
            <FaInstagram size={25} className="text-[#E1306C]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;