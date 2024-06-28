import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'

const Inventory = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <div className='flex'>
      <Sidebar />
        <div className="flex items-center py-4 px-8 lg:ml-[8%] ">
          <p className='text-xl font-semibold'>INVENTORY IN PROGRESS 😎</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Inventory