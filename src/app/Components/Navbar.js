'use client'
import Link from 'next/link'
import Image from 'next/image';
import './Navbar.css'
import React, {useState} from 'react';
const Navbar = () =>{
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the state of the button
      };
      
    return(

      <>
        <div className='LogoImage'>
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="Cantor College Logo"/>

      </div><div>
          <nav>
            <button className='burger' onClick={toggleMenu}>&#9776;</button>
            <menu className={menuOpen ? "active" : ""}>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/info-for-students'>Students</Link></li>
              <li><Link href='/info-for-staff'>Staff</Link></li>
              <li><Link href='/design-courses'>Design Courses</Link></li>
              <li><Link href='/computing-courses'>Computing Courses</Link></li>
              <li><Link href='/learning-resources'>Learning Resources</Link></li>
              <li><Link href='/course-list'>Course List</Link></li>
              <li><Link href='/info-for-businesses'>Businesses</Link></li>
              <li><Link href='/facilities'>Facilities</Link></li>
              <li><Link href='/how-to-find-us'>How to find us</Link></li>

            </menu>
          </nav>
        </div></>
    )
}
export default Navbar;

