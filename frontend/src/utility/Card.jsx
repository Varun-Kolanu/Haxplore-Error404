import React from 'react';
import style from './Card.module.css';
import pic from '../assets/aarti.webp';

export default function Card() {
  return (
    <>
      <div className={style.flip}>
        <div
          className={style.front}
          style={{
            backgroundImage: `url(${pic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '250px',
          }}
        >
          <h1 className='text-[20px] font-bold'>Ganga Aarti Booking</h1>
        </div>
        <div className={style.back}>
          <h2 className='mb-2'>Ganga Aarti Booking</h2>
          <p>
            The Ganga Aarti is an ancient ritual dating back to more than 750
            years. The seven Shastri/Pandit/Purohit each belonging to a
            different Gotra perform the Aarti simultaneously.
          </p>
          <button className='mt-8 w-[110px] text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-m px-4 py-2 text-center me-2 mb-2 dark:focus:ring-orange-900'>
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
