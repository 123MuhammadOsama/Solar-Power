import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <div className='bg-gray-800'>
      <div className='flex justify-between items-center px-4 sm:px-8 md:px-20 lg:px-40 py-1 sm:py-6 md:py-8 lg:py-5'>
        
        <Image
          src='/logo.png'
          alt='solar'
          width={150}  // Adjusted for small screens
          height={ 75 }  // Adjusted for small screens
          className='w-[100px] sm:w-[150px] md:w-[200px] lg:w-[250px]'
        />

       
        <div className='flex space-x-4 sm:space-x-6 text-white'>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebookF className='text-2xl sm:text-3xl md:text-6xl bg-blue-600 hover:bg-blue-900 p-1 rounded-lg' />
          </a>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaWhatsapp className='text-2xl sm:text-3xl md:text-6xl hover:bg-green-900 bg-green-500 p-1 rounded-lg' />
          </a>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='text-2xl sm:text-3xl md:text-6xl hover:bg-pink-900 bg-pink-600 p-1 rounded-xl' />
          </a>
          <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
            <FaLinkedinIn className='text-2xl sm:text-3xl md:text-6xl hover:bg-blue-900 bg-blue-800 p-1 rounded-lg' />
          </a>
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
