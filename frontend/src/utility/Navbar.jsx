import React from 'react';
import logo from '../assets/temple_logo.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <div className='h-20 w-full  bg-gray-900 text-white flex justify-between items-center border-gray-300'>
        <div className='flex justify-center h-20 w-25 items-center'>
          <Link to='/'>
            <img className='h-22 w-20 pt-4' src={logo} alt='No Image' />
          </Link>
        </div>
        <div>
          <p>Kashi Vishawanath Temple Uttar Pradesh</p>
          <p
            className='font-semibold'
            style={{
              background: '#FF6D01',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            A place of worship
          </p>
        </div>
        <div className='flex justify-around items-center gap-8'>
          <Link className='hover:text-[#FF6D01]' to='/'>
            About Us
          </Link>
          <Link className='hover:text-[#FF6D01]' to='/'>
            Our Services
          </Link>
          <Link className='hover:text-[#FF6D01]' to='/'>
            Contact Us
          </Link>
          <Link className='hover:text-[#FF6D01]' to='/'>
            Dashboard
          </Link>
        </div>
        <div className='flex items-center'>
          <Link
            to='/signin'
            className='mr-5 w-24 h-10 flex justify-center items-center text-base font-semibold text-center bg-white text-black rounded-md'
          >
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
}
