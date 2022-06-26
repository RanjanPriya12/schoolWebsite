import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    return (
        <div>
            <div className='footerContainer'>
            <div>
                <Link className='link' to='/contact'>Contact Us</Link>
                <h3>(+91) 4553679785</h3>
                <h3>school@gmail.com</h3>
            </div>
            <div>
                <Link className='link' to='/about'>About Us</Link>
                <h3>Detail</h3>
                <h3>Campus</h3>
            </div>
            <div>
                <Link className='link' to='/faculty'>Faculty</Link>
                <h3>Principle</h3>
                <h3>Teachers</h3>
            </div>
            <div>
                <Link className='link' to='/course'>Courses</Link>
                <h3>Junior School Classes</h3>
                <h3>Primary School Classes</h3>
            </div>
        </div>
        <div className='flex'>
            <h3>
            @ Copyright 2022 Maan Phulajhari Devi Junior School
            </h3>
        </div>
        </div>
    )
}
