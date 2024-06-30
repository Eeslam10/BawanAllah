import { useState } from 'react'
import { MdCancel } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import DB from '../../assets/db.svg';
import inv from '../../assets/inv.svg';
import orders from '../../assets/orders.svg';
import reports from '../../assets/reports.svg';
import supplies from '../../assets/supplies.svg';
import help from '../../assets/help.svg';
import settings from '../../assets/settings.svg';
import SidebarLink from './SidebarLInks'; 

const sidebar1 = [
  { img: DB, text: "Dashboard", link: "/" },
  { img: inv, text: "Inventory", link: "/inventory" },
  { img: orders, text: "Sales Order", link: "/sales-order" },
  { img: supplies, text: "Suppliers", link: "/suppliers" },
  { img: reports, text: "Reports", link: "/reports" },
];

const sidebar2 = [
  { img: help, text: "Help", link: "/help" },
  { img: settings, text: "Settings", link: "/settings" },
];

const MobileSidebar = () => {
    const [menubar, setmenubar] = useState(false);

  return (
    <div>
        <div className="lg:hidden absolute right-4 ml-4 -top-[-10px]">
        <BiMenuAltRight
          onClick={() => setmenubar(!menubar)}
          role="button"
          color="#AAA5F8"
          size={40}
        />
      </div>
      <div
        className={`w-[80%] fixed lg:hidden right-0 top-0 bottom-0 h-screen text-[#FFECE5] bg-[#F8F9FA] flex flex-col gap-8 px-5 z-10 ${
          menubar ? "translate-x-[0%]" : "translate-x-[100%] hidden"
        }`}
      >
        {" "}
        <div>
        <MdCancel onClick={() => setmenubar(!menubar)} size={40} className='float-right' />
        <h1 className='text-sm text-[#6C757D] font-bold uppercase mt-2 mb-3'>General</h1>
        <ul className="w-full ml-4">
          {sidebar1.map((link, i) => (
            <SidebarLink
              text={link.text}
              img={link.img}
              key={i}
              to={link.link}
            />
          ))}
        </ul>
        <div className='mt-5'>
          <h1 className='text-sm text-[#6C757D] font-bold uppercase mb-3'>Support</h1>
          <ul className='ml-4'>
            {sidebar2.map((link, i) => (
              <SidebarLink text={link.text} img={link.img} key={i} to={link.link} />
            ))}
          </ul>
        </div>
        <div className='w-full flex items-center gap-3'>
          <div className=''>
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
              <div className='w-50'>
              <button className='bg-[#04B4FC] text-white py-2 pl-4 pr-8 rounded-md text-sm flex items-center gap-2 font-semibold'>
              <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-white'
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
                Search
              </button>
              </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default MobileSidebar