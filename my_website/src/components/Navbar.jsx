import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { HiMenu, HiX } from 'react-icons/hi';
//import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;