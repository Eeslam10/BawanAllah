import React from 'react';
import './Dashboard.css'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <div className="flex items-center py-4 px-8 lg:ml-[8%] ">
                <p className='text-xl font-semibold'>Dashboard content here</p>
            </div>
      </div>
    </div>
  )
}

export default Dashboard