import React from 'react';
import Card from '../../utility/Card';

export default function Services() {
  return (
    <>
      <div className='flex flex-col items-center justify-center border-t border-gray-300'>
        <h1 className='text-[50px] font-bold text-center mt-10 mb-10 border-b  border-orange-500'>
          Our Services
        </h1>
        <div className='grid grid-cols-3 gap-7 w-full pl-[55px] pb-10 pt-5'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
}
