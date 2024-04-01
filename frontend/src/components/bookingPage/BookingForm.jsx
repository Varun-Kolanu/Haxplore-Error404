import React from 'react';
import Navbar from '../../utility/Navbar';
import { Link } from 'react-router-dom';

export default function BookingForm() {
  return (
    <>
      <Navbar></Navbar>
      <div className='bg-white h-screen flex flex-col items-center'>
        <p className='text-center text-[50px] underline'>Ganga Aarti Booking</p>
        <div className='w-4/5 flex flex-col mt-14 text-orange-500'>
          <p className='self-start text-[25px] mb-5'>Booking Details : </p>

          <div className='relative overflow-x-auto shadow-md sm:rounded-lg w-full'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Event Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Slot Id
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Slot Timing
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Price
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Total Amount
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    Ganga Aarti Booking
                  </th>
                  <td className='px-6 py-4'>1001</td>
                  <td className='px-6 py-4'>4:00 6:00</td>
                  <td className='px-6 py-4'>Rs. 300/person</td>
                  <td className='px-6 py-4'>Rs. 300</td>
                  <td className='px-6 py-4'>
                    <Link
                      to='/events'
                      className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='w-4/5 mt-20'>
          <p className='self-start text-[25px] mb-5  text-orange-500'>
            Devotee Details :
          </p>
          <form>
            <div className='grid gap-6 mb-6 md:grid-cols-3'>
              <div>
                <label
                  for='name'
                  className='block mb-2 text-[18px] font-large text-gray-900'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Enter Your Name'
                  required
                />
              </div>
              <div>
                <label
                  for='gender'
                  className='block mb-2 text-[18px] font-large text-gray-900'
                >
                  Gender
                </label>
                <input
                  type='text'
                  id='gender'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Enter Your Gender'
                  required
                />
              </div>
              <div>
                <label
                  for='age'
                  className='block mb-2 text-[18px] font-large text-gray-900'
                >
                  Age
                </label>
                <input
                  type='number'
                  id='age'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Enter Your Age'
                  required
                />
              </div>
            </div>
          </form>
          <form>
            <div className='grid gap-6 mb-6 md:grid-cols-3'>
              <div>
                <label
                  for='name'
                  className='block mb-2 text-[18px] font-large text-gray-900'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Enter Your Name'
                  required
                />
              </div>
              <div>
                <label
                  for='gender'
                  className='block mb-2 text-[18px] font-large text-gray-900'
                >
                  Gender
                </label>
                <input
                  type='text'
                  id='gender'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Enter Your Gender'
                  required
                />
              </div>
              <div>
                <label
                  for='age'
                  className='block mb-2 text-[18px] font-large text-gray-900'
                >
                  Age
                </label>
                <input
                  type='number'
                  id='age'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Enter Your Age'
                  required
                />
              </div>
            </div>
          </form>
          <button
            type='button'
            className='mt-5 focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
          >
            Book Ticket
          </button>
        </div>
      </div>
    </>
  );
}
