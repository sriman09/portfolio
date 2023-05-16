import React from "react";
//import {Link} from 'react-router-dom'
import { Link } from "react-scroll";
import Sticky from "react-sticky-el";
const Navbar = () => {
  return (
    <Sticky>
      <header className="text-gray-100 body-font bg-gray-900">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0"
            href
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Srimanvit Pattanaik</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              className="mr-5 hover:text-red-600"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="hero"
              activeClassName="selected"
            >
              Home
            </Link>
            <Link
              className="mr-5 hover:text-red-600"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="skills"
              activeClassName="selected"
            >
              Skills
            </Link>
            <Link
              className="mr-5 hover:text-red-600"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="projects"
              activeClassName="selected"
            >
              Projects
            </Link>
            <Link
              className="mr-5 hover:text-red-600"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="contact"
              activeClassName="selected"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </Sticky>
  );
};
export default Navbar;
