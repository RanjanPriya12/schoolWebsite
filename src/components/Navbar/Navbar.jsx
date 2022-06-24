import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About Us</Link>
        <Link className='link' to='/contact'>Contact Us</Link>
        <Link className='link' to='/course'>Course</Link>
        <Link className='link' to='/faculty'>Faculty</Link>
    </div>
  )
}
