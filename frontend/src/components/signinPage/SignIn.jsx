import React from 'react';

export default function SignIn() {
  return (
    <>
      <div class='flex items-center justify-center h-screen bg-gray-500'>
        <div class='items-center justify-center h-screen w-3/5 bg-white flex flex-col gap-5'>
          <a className='hover:underline hover:text-orange-400' href='/'>
            Back to Home Page
          </a>
          <button class='px-4 py-2 border flex gap-[70px] border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 w-2/5'>
            <img
              class='w-6 h-6'
              src='https://www.svgrepo.com/show/475656/google-color.svg'
              loading='lazy'
              alt='google logo'
            />
            <span>Signin with Google</span>
          </button>

          <p>Or</p>

          <form class='max-w-sm mx-auto'>
            <label
              for='phone-input'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Signin with Phone Number:
            </label>
            <div class='relative'>
              <div class='absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none'>
                <svg
                  class='w-4 h-4 text-gray-500 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 19 18'
                >
                  <path d='M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z' />
                </svg>
              </div>
              <input
                type='tel'
                id='phone-input'
                aria-describedby='helper-text-explanation'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='+91-6290922708'
                required
              />
            </div>
            <p
              id='helper-text-explanation'
              class='mt-2 mb-4 text-sm text-gray-500 dark:text-gray-400'
            >
              We will send you an SMS with a verification code.
            </p>
            <button
              type='submit'
              class='text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              Send verification code
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
