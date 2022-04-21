import React from 'react';
import { Link } from 'react-router-dom';
import '../src/Css/Navbar.css';
const Navbar = () => {
    return <div class="Navbar">
        

       <a href='#education'>Education</a>
       <a href='#achivements'>Achievements</a>
       <a href='#projects'>Projects</a>
       <a href='#skills'>Skills</a>
      
       
       <a href='https://www.linkedin.com/in/parmeet-singh-09a69a1b8/'>
        <img class='nav_links' src='linkedin.webp' />
       </a>
       <a href='https://github.com/ParmeetMundi'>
        <img class='nav_links' src='github.webp'/>
       </a>
       <a href='https://www.instagram.com/parmeetmundi/'>
        <img class='nav_links' src='instagram.webp'/>
       </a>
    </div>;
}


export default Navbar;