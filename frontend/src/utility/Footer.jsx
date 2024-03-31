import React from 'react';
import logo from '../assets/temple_logo.png';
import email from '../assets/email_icon.svg';
import facebook from '../assets/fb_icon.svg';
import instagram from '../assets/insta_icon.svg';
import linkedin from '../assets/linkedin_icon.svg';

export default function Footer() {
  return (
    <>
      <div className='w-full h-[400px] border-t flex bg-white'>
        <div className='flex flex-col items-center w-2/5'>
          <img className='h-[250px]' src={logo} alt='' />
          <div className='flex mb-[40px] items-center justify-center gap-[70px]'>
            <div className='flex flex-col gap-2 pl-5'>
              <a className='hover:underline' href=''>
                Home
              </a>
              <a className='hover:underline' href=''>
                About Us
              </a>
            </div>
            <div className='flex flex-col gap-2'>
              <a className='hover:underline' href=''>
                Our Services
              </a>
              <a className='hover:underline' href=''>
                Dashboard
              </a>
            </div>
          </div>
          <div className='flex gap-7'>
            <img className='h-10 w-10' src={email} alt='' />
            <img className='h-10 w-10' src={instagram} alt='' />
            <img className='h-10 w-10' src={facebook} alt='' />
            <img className='h-10 w-10' src={linkedin} alt='' />
          </div>
        </div>
        <div className='right'></div>
      </div>
    </>
  );
}
