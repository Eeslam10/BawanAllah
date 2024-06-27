import React from 'react';
import Logo from '../../assets/logo.svg';

const Navbar = ({ title, showSearchBar }) => {  

  return (
    <div className='w-full flex items-center justify-between px-2 py-2 md:px-10 md:py-4 bg-white border border-b-[#CED4DA] mx-auto'>
      <div className=''>
        <img src={Logo} alt="BawanAllah" />
      </div>
      <div className='w-60'>
          <form className='flex items-center'>
            <label htmlFor='simple-search' class='sr-only'>
              Search
            </label>
            <div className='relative w-full'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
              <input
                type='text'
                className='bg-white border border-[#CED4DA] text-black text-sm rounded-xl block w-full pl-10 p-2.5 outline-none'
                placeholder='Search'
                required
              />
            </div>
          </form> 
      </div> 
    </div>
  );
};

export default Navbar;
