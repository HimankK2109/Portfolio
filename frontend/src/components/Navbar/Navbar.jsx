import React, { useEffect, useState } from "react";
import logo from "../../assets/name.png";
import underline from "../../assets/nav_underline.svg";
import "./Navbar.css";
import { motion } from "framer-motion";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track the scroll position and update hasScrolled
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY >= 70);
    };

    // Set the initial state based on the current scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add or remove `overflow-hidden` to prevent scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`top-0 left-0 w-full px-6 z-50 flex items-center justify-between
      ${hasScrolled ? "scroll-header md:px-0" : "my-5 md:px-20"}`}
    >
      <a
        className={`${hasScrolled ? "cursor-pointer" : "pointer-events-none"}`}
        onClick={() => {
          window.scrollTo({
            top: 0, // Scroll to the top of the page
          });
        }}
      >
        <img
          className={`z-10
          ${hasScrolled ? "md:ml-7" : ""} w-32 h-16`}
          src={logo}
          alt=""
        />
      </a>

      {/* Menu Toggle for Small Screens */}
      <img
        className={`block lg:hidden cursor-pointer z-[100] ${
          isMenuOpen ? 'h-8 w-8' : `h-10 w-10 ${hasScrolled ? "md:mr-7" : ""}`
        }`}
        src={isMenuOpen ? menu_close : menu_open}
        alt="Menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Sliding Pane */}
      <div
        className={`fixed top-0 right-0 ${hasScrolled? "h-[60vh]" : "h-screen"} w-[50vw] bg-gray-900 text-white bg-opacity-100 z-50 flex flex-col items-center justify-start gap-8 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-[150%]"
        } transition-transform duration-500 ease-in-out`}
      >
        <ul className="list-none text-left text-xl p-10 mt-20">
          <li className="mb-6">
          <a
            className="relative z-10"
            onClick={() => {
              window.scrollTo({
                top: 0, // Scroll to the top of the page
              });
              setIsMenuOpen(false);
            }}
          >
            Home
          </a>
          </li>
          <li className="mb-6">
            <AnchorLink
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </AnchorLink>
          </li>
          <li className="mb-6">
            <AnchorLink
              href="#arsenal"
              onClick={() => setIsMenuOpen(false)}
            >
              Arsenal
            </AnchorLink>
          </li>
          <li className="mb-6">
            <AnchorLink
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </AnchorLink>
          </li>
          <li className="mb-6">
            <AnchorLink
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
      </div>

      {/* For Desktop */}
      <ul className="hidden lg:flex items-center list-none gap-[30px] text-[20px] text-white">
        <li className="relative group cursor-pointer">
          <a
            className="relative z-10"
            href="#home"
            onClick={() => {
              window.scrollTo({
                top: 0, // Scroll to the top of the page
              });
            }}
          >
            Home
          </a>
          <img
            src={underline}
            alt="underline"
            className="absolute left-0 bottom-0 w-full h-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
          />
        </li>
        <li className="relative group cursor-pointer">
          <AnchorLink className="relative z-10" offset={hasScrolled ? -7 : 100} href="#about" onClick={() => window.history.pushState(null, '', '#about')}><p>About Me</p></AnchorLink>
          <img
            src={underline}
            alt="underline"
            className="absolute left-0 bottom-0 w-full h-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
          />
        </li>
        <li className="relative group cursor-pointer">
          <AnchorLink className="relative z-10" offset={hasScrolled ? 14 : 120} href="#arsenal" onClick={() => window.history.pushState(null, '', '#arsenal')}><p>Arsenal</p></AnchorLink>
          <img
            src={underline}
            alt="underline"
            className="absolute left-0 bottom-0 w-full h-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
          />
        </li>
        <li className="relative group cursor-pointer">
          <AnchorLink className="relative z-10" offset={hasScrolled ? -40 : 120} href="#projects" onClick={() => window.history.pushState(null, '', '#projects')}><p>Projects</p></AnchorLink>
          <img
            src={underline}
            alt="underline"
            className="absolute left-0 bottom-0 w-full h-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
          />
        </li>
        <li className="relative group cursor-pointer">
          <AnchorLink className="relative z-10" offset={hasScrolled ? 40 : 148} href="#contact" onClick={() => window.history.pushState(null, '', '#contact')}><p>Contact</p></AnchorLink>
          <img
            src={underline}
            alt="underline"
            className="absolute left-0 bottom-0 w-full h-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
          />
        </li>
      </ul>

      <button
      className="hidden lg:block nav-connect z-50 py-[20px] px-[40px] rounded-[50px] text-white text-[18px] cursor-pointer"
      onClick={(e) => {
        const section = document.getElementById("contact");
        if (section) {
          const offset = hasScrolled ? 40 : 148;
          const scrollPosition = section.offsetTop - offset;
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
          window.history.pushState(null, '', '#contact');
        }
      }}
    >
      <span className="relative z-10">Connect With Me</span>
      </button>
    </motion.div>
  );
}

export default Navbar;