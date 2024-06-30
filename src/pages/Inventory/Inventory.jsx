import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer';
import TableData from '../../components/TableData';
import Admin from '../../assets/images/admin.png';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CiMenuKebab, CiExport, CiDeliveryTruck } from "react-icons/ci";
import { BiMemoryCard } from "react-icons/bi";
import { BsBox2 } from "react-icons/bs";
import MobileSidebar from '../../components/Sidebar/MobileSidebar';
import mac from '../../assets/mac_one.svg';
import iphone from '../../assets/iphone1.svg';
import key from '../../assets/key1.svg';
import ody from '../../assets/ody.svg';

const Inventory = () => {

  return (
    <div className='w-full'>
      <Navbar />
      <MobileSidebar />
      <div className='flex'>
      <Sidebar />
        <div className="w-full lg:w-3/5 border lg:border-r-[#CED4DA]">
          <div className='flex items-center justify-between bg-[#F4F6FC] py-4 px-6 mb-5 border-b border-[#CED4DA]'>
            <p className='text-base font-bold'>Inventory</p>
            <div className='w-60 hidden lg:block'>
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
              Add New Product
            </button>
          </div>
          <div className='electrons flex flex-col gap-6 mx-8'>
              <p className=" font-bold text-sm text-center block lg:hidden">Recent Activity</p>
              <div className='grid grid-cols-2 lg:hidden gap-3'>
                <div className='bg-white border p-2 rounded-md'>
                  <h3 className='text-xs font-semibold'>Restocked <span className='text-[#04B4FC]'>6</span>  Products</h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 mt-3'>
                      <img src={mac} alt="macbook pro" />
                      <span className='text-[0.625rem] text-[#212529] font-bold'>Macbook pro</span>
                    </div>
                  </div>
                </div>
                <div className='bg-white border p-2 rounded-md'>
                  <h3 className='text-xs font-semibold'>Sold <span className='text-[#04B4FC]'>2</span>  Products</h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 mt-3'>
                      <img src={iphone} alt="macbook pro" />
                      <span className='text-[0.625rem] text-[#212529] font-bold'>IPhone14 pro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className='py-4 lg:px-6 h-[730px] overflow-x-auto'>
            <p className='text-base mb-4 font-semibold px-6'>Product List</p>
            <TableData />
          </div>
        </div>
        <div className='admin hidden lg:block bg-white w-3/12'>
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
            <div className='electrons flex flex-col gap-6 mx-8'>
              <p className=" font-bold text-sm my-2 ">Recent Activity</p>
              <div className='hidden lg:flex lg:flex-col space-y-6'>
                <div>
                  <h3 className='text-xs font-semibold'>Restocked <span className='text-[#04B4FC]'>6</span>  Products</h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 mt-3'>
                      <img src={mac} alt="macbook pro" />
                      <span className='text-[0.625rem] text-[#5C6F88] font-normal'>Macbook pro</span>
                    </div>
                    <div className='text-[0.625rem] text-[#5C6F88] font-normal'>-</div>
                    <p className='text-[0.625rem] text-[#5C6F88] font-normal'>1 min ago</p>
                  </div>
                </div>
                <div>
                  <h3 className='text-xs font-semibold'>Sold <span className='text-[#04B4FC]'>2</span>  Products</h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 mt-3'>
                      <img src={iphone} alt="macbook pro" />
                      <span className='text-[0.625rem] text-[#5C6F88] font-normal'>iphone14 pro</span>
                    </div>
                    <div className='text-[0.625rem] text-[#5C6F88] font-normal'>-</div>
                    <p className='text-[0.625rem] text-[#5C6F88] font-normal'>12 min ago</p>
                  </div>
                </div>
                <div>
                  <h3 className='text-xs font-semibold'>Sold <span className='text-[#04B4FC]'>1</span>  Product</h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 mt-3'>
                      <img src={key} alt="macbook pro" />
                      <span className='text-[0.625rem] text-[#5C6F88] font-normal'>Zoom75</span>
                    </div>
                    <div className='text-[0.625rem] text-[#5C6F88] font-normal'>-</div>
                    <p className='text-[0.625rem] text-[#5C6F88] font-normal'>23 min ago</p>
                  </div>
                </div>
                <div>
                  <h3 className='text-xs font-semibold'>Restocked <span className='text-[#04B4FC]'>12</span>  products</h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 mt-3'>
                      <img src={key} alt="macbook pro" />
                      <span className='text-[0.625rem] text-[#5C6F88] font-normal'>Zoom75</span>
                    </div>
                    <div className='text-[0.625rem] text-[#5C6F88] font-normal'>-</div>
                    <p className='text-[0.625rem] text-[#5C6F88] font-normal'>42 min ago</p>
                  </div>
                </div>
                <div>
                  <h3 className='text-xs font-semibold'>Sold <span className='text-[#04B4FC]'>3</span>  products</h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 mt-3'>
                      <img src={ody} alt="macbook pro" />
                      <span className='text-[0.625rem] text-[#5C6F88] font-normal'>Samsung Odyssey</span>
                    </div>
                    <div className='text-[0.625rem] text-[#5C6F88] font-normal'>-</div>
                    <p className='text-[0.625rem] text-[#5C6F88] font-normal'>2hr ago</p>
                  </div>
                </div>
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

export default Inventory