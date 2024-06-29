import React from 'react'
// import AdminSection from '../../components/AdminSection';
import { AiOutlinePlusCircle } from "react-icons/ai";
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import Admin from '../../assets/images/admin.png';
import { CiMenuKebab, CiExport, CiDeliveryTruck } from "react-icons/ci";
import { BiMemoryCard } from "react-icons/bi";
import { BsBox2 } from "react-icons/bs";
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image7 from '../../assets/images/image7.png';
import SalesData from '../../components/SalesData';

const SalesOrder = () => {
  const images = [
    { src: image1, description: 'Macbook Pro' },
    { src: image2, description: 'iphone14 pro' },
    { src: image3, description: 'Zoom75' },
    { src: image4, description: 'Airpods Pro' },
    { src: image5, description: 'Samsung Galaxy Fold' },
    { src: image6, description: 'Samsumg Odyssey' },
    { src: image7, description: 'Logitech Superlight' }
  ];

  return (
    <div className='w-full'>
      <Navbar/>
      <div className='flex'>
      <Sidebar />
        <div className="w-3/5 border border-r-[#CED4DA]">
          <div className='flex items-center justify-between bg-[#F4F6FC] py-4 px-6 border-b border-[#CED4DA]'>
            <p className='text-base font-bold'>Sales Orders</p>
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
            <button className='flex items-center gap-2 text-white bg-[#04B4FC] py-2 px-2 text-sm font-semibold rounded-md'>
            <AiOutlinePlusCircle size={25} />
              Place Order
            </button>
          </div>
          <div className='-mt-2 mb-3'>
            <SalesData />
          </div>
          <hr />
        </div>

        <div className='admin bg-white w-3/12'>
          <div className='flex justify-around items-center mt-4'>
            <div className='flex gap-2'>
              <img src={Admin} className='w-9 h-9 rounded-full' />
              <div className='bryan '>
                <p className='text-sm font-semibold'>Bryan Doe</p>
                <p className='text-xs'>Admin</p>
              </div>
            </div>
            <CiMenuKebab size={30} className='border-2 p-1 rounded-md' />
          </div>
          <div className='quick flex flex-col gap-4 '>
            <p className='mx-14 font-semibold mt-4'>Quick Actions</p>
            <div className='flex justify-around items-center text-xs font-semibold text-slate-500 '>
              <div className='flex items-center gap-2'>
                <BiMemoryCard size={20} />
                <p>Create Order</p>
              </div>
              <p>ctrl + n</p>
            </div>
            <div className='flex justify-around  items-center text-xs font-semibold text-slate-500 '>
              <div className='flex items-center gap-2'>
                <BsBox2 size={20} />
                <p>Add Product</p>
              </div>
              <p>ctrl + p</p>
            </div>
            <div className='flex justify-around  items-center text-xs font-semibold text-slate-500 '>
              <div className='flex items-center gap-2'>
                <CiDeliveryTruck size={20} />
                <p>Add Supplier</p>
              </div>
              <p>ctrl + k</p>
            </div>
            <div className='flex justify-around items-center text-xs font-semibold text-slate-500 gap-8'>
              <div className='flex items-center  gap-2'>
                <CiExport size={20} />
                <p>Exports</p>
              </div>
              <p>ctrl + s</p>
            </div>
            <hr />
            <div className='electrons flex flex-col gap-6 mx-14'>
              <p className=" font-bold text-sm my-2 ">Fast Moving Items</p>
              <div className="image-list space-y-8">
                {images.map((image, index) => (
                  <div key={index} className="flex items-center">
                    <img src={image.src} alt={`image-${index + 1}`} className="w-5 h-5 rounded-full object-cover mr-4" />
                    <span className="text-xs text-black">{image.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className=''>
      <Footer />
      </div>
    </div>
  )
}

export default SalesOrder