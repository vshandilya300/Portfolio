import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import linkdin from '../linkedin.png';
import github from '../github.png';
import resume from '../cv.png';
import leetcode from '../leetcode.png';

export default function Navbar() {
  return (
    <header className="md:sticky top-0 z-10 bg-black">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="#about"
          className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl"
          aria-label="Navigate to About section"
        >
          Vishal Shandilya
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a
            href="#projects"
            className="mr-5 hover:text-white"
            aria-label="Navigate to Past Work section"
          >
            Past Work
          </a>
          <a
            href="#skills"
            className="mr-5 hover:text-white"
            aria-label="Navigate to Skills section"
          >
            Skills
          </a>
          <a
            href="https://drive.google.com/file/d/1B2nl6XkLvAPg64jHQ-tdHHLFmHJ3R725/view?usp=sharing"
            className="mr-5"
            aria-label="Navigate to resume"
            target="_blank"
            rel="noopener noreferrer" 
          >
            <img className="h-10 w-10" src={resume} alt="Resume"/>
            <span className="sr-only">Resume</span>
            
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-shandilya-204479201/"
            className="mr-5"
            aria-label="Navigate to Linkdin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src={linkdin} alt="Linkdin"/>
            
          </a>
          <a
            href="https://github.com/vshandilya300"
            className="mr-5"
            aria-label="Navigate to Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src={github} alt="Github"/>
            
          </a>
          <a
            href="https://leetcode.com/u/Vishal300/"
            className="mr-5"
            aria-label="Navigate to Leetcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src={leetcode} alt="Leetcode"/>
            
          </a>
        </nav>
        
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 hover:text-black rounded text-base mt-4 md:mt-0"
          aria-label="Navigate to Contact section"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1 text-gray-400 hover:text-black" />
        </a>
      </div>
    </header>
  );
}
