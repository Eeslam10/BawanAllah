import React from 'react';
import Logo from '../../assets/logo.svg';

const Navbar = ({ title, showSearchBar }) => {  

  return (
    <div className='w-full flex items-center justify-between px-2 py-2 md:px-10 md:py-5 bg-white border border-b-[#CED4DA] mx-auto'>
      <div className='flex items-center'>
        {/* <h2 className='text-dark-100 text-sm md:text-xl whitespace-nowrap font-extrabold'>
          {title}
        </h2> */}
        <img src={Logo} alt="BawanAllah" />
      </div>
      <div className='w-96'>

          <form class='flex items-center'>
            <label for='simple-search' class='sr-only'>
              Search
            </label>
            <div class='relative w-full'>
              <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  class='w-4 h-4 text-gray-500 dark:text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </div>
              <input
                type='text'
                class='bg-gray-50 border border-[#CED4DA] text-dark-100 text-sm rounded-full block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600  dark:text-white outline-none'
                placeholder='Search reference'
                required
              />
            </div>
          </form>
  
      </div>
      
    </div>
  );
};

export default Navbar;
