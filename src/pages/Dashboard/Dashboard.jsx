import React, { useState } from 'react';
import './Dashboard.css'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { AiOutlineLineChart } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { BiDollar } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";
import Chart from "react-apexcharts";
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




const Dashboard = () => {

  const images = [
    { src: image1, description: 'Macbook Pro' },
    { src: image2, description: 'iphone14 pro' },
    { src: image3, description: 'Zoom75' },
    { src: image4, description: 'Airpods Pro' },
    { src: image5, description: 'Samsung Galaxy Fold' },
    { src: image6, description: 'Samsumg Odyssey' },
    { src: image7, description: 'Logitech Superlight' }
  ];

  const [state, setState] = useState({
    options: {
      chart: {
        stacked: true,
        id: "bar",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      },
      plotOptions: {
        bar: {
          borderRadius: 10,  // Set the border radius to make the top rounded
        },
      },
      colors: ['#87CEEB', '#9933FF']
    },
    series: [
      {
        name: "Stock In",
        data: [30, 40, 45, 43, 49, 34, 12, 33, 33, 44, 23, 31]
      },
      {
        name: "Stock Out",
        data: [5, 21, 30, 34, 21, 30, 41, 52, 51, 33, 44, 22]
      }
    ]


  });
  return (
    <div className='dashboard bg-[#F4F5FC]'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='w-3/5 mt-4'>
          <h3 className='m-1 ml-10 font-bold'>Sales Summary</h3>
          <div className='flex gap-4 ml-10'>
            <div className='flex items-center  bg-white w-48 p-3 rounded-md cursor-pointer'>
              <AiOutlineLineChart size={30} color='blue' className='bg-cyan-300 rounded-full p-1.5 mr-2' />
              <div className='text-xs'	>
                <p>143.3k</p>
                <p>Today's Sales</p>
              </div>
            </div>
            <div className='flex items-center bg-white w-48 p-3 rounded-md px-2 cursor-pointer'>
              <SlCalender size={30} color='purple' className='bg-violet-300 rounded-full p-1.5 mr-2' />
              <div className='text-xs'	>
                <p>$250,435</p>
                <p>Yearly Total Sales</p>
              </div>
            </div>
            <div className='flex items-center bg-white w-48 p-3 rounded-md cursor-pointer'>
              <BiDollar size={30} color='orange' className='bg-orange-100 rounded-full p-1.5 mr-2' />
              <div className='text-xs'	>
                <p>$68.9k</p>
                <p>Today's Sales</p>
              </div>
            </div>
            <div className='flex items-center bg-white w-48 p-3 rounded-md cursor-pointer'>
              <IoBagOutline size={30} color='red' className='bg-rose-200 rounded-full p-1.5 mr-2' />
              <div className='text-xs'	>
                <p>343</p>
                <p>Products</p>
              </div>
            </div>
          </div>


          <div className='charts bg-white mt-4 flex flex-col justify-center rounded-md'>
            <p className='font-bold text-sm mx-4 mt-4'>Stock Report</p>
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="800"
              height={300}
            />
            <hr />
            <div className="container mx-auto mt-4">
              <div className='flex justify-between my-4'>
                <p className=" font-bold text-sm mx-4 ">Sales Order</p>
                <p className=" font-bold text-sm mx-4 ">last 7 days</p>
              </div>
              <div className="">
                <table className="min-w-full bg-white p-4">

                  <tbody className='text-xs'>
                    <tr className='text-sm bg-slate-200 font-semibold text-slate-500 ' >
                      <td className="py-2 px-4">Channel</td>
                      <td className="py-2 px-4">Draft</td>
                      <td className="py-2 px-4">Confirmed</td>
                      <td className="py-2 px-4">Packed</td>
                      <td className="py-2 px-4">Shipped</td>
                      <td className="py-2 px-4">Invoice</td>
                    </tr>
                    <tr >
                      <td className="py-2 px-4">Direct Sales</td>
                      <td className="py-2 px-4">10</td>
                      <td className="py-2 px-4">10</td>
                      <td className="py-2 px-4">11</td>
                      <td className="py-2 px-4">12</td>
                      <td className="py-2 px-4">15</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Wholesale</td>
                      <td className="py-2 px-4">10</td>
                      <td className="py-2 px-4">10</td>
                      <td className="py-2 px-4">11</td>
                      <td className="py-2 px-4">12</td>
                      <td className="py-2 px-4">15</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Retail</td>
                      <td className="py-2 px-4">10</td>
                      <td className="py-2 px-4">10</td>
                      <td className="py-2 px-4">11</td>
                      <td className="py-2 px-4">12</td>
                      <td className="py-2 px-4">15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

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
      <Footer />
    </div>

  )
}

export default Dashboard