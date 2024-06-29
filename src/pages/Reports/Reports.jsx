import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'
import Admin from '../../assets/images/admin.png';
import { CiMenuKebab } from "react-icons/ci";
import Chart from 'react-apexcharts';


const Reports = () => {
    const options = {
        chart: {
            type: 'heatmap',
            toolbar: {
                show: false // Hide toolbar (including download buttons, etc.)
            }
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                colorScale: {
                    ranges: [
                        {
                            from: 0,
                            to: 10,
                            color: '#87CEEB', // Sky blue
                        },
                        {
                            from: 11,
                            to: 20,
                            color: '#5DADE2', // Light blue
                        },
                        {
                            from: 21,
                            to: 30,
                            color: '#3498DB', // Medium blue
                        },
                        {
                            from: 31,
                            to: 40,
                            color: '#2980B9', // Dark blue
                        },
                    ],
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: 'category',
            position: 'top', // Display categories at the top of the chart
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        legend: {
            show: false,
        },
    };

    const series = [
        { name: '16:00', data: generateData(7, { min: 0, max: 40 }) },
        { name: '15:00', data: generateData(7, { min: 0, max: 40 }) },
        { name: '14:00', data: generateData(7, { min: 0, max: 40 }) },
        { name: '12:00', data: generateData(7, { min: 0, max: 40 }) },
        { name: '12:00', data: generateData(7, { min: 0, max: 40 }) },
        { name: '11:00', data: generateData(7, { min: 0, max: 40 }) },
        { name: '10:00', data: generateData(7, { min: 0, max: 40 }) },
        { name: '09:00', data: generateData(7, { min: 0, max: 40 }) },
    ];

    // Helper function to generate random data
    function generateData(count, yrange) {
        const series = [];
        for (let i = 0; i < count; i++) {
            const x = 'w' + (i + 1).toString();
            const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push({ x, y });
        }
        return series;
    }

    const chartConfig = {
        series: [
          {
            name: '',
            data: [44, 55, 22, 43, 21]
          },
          {
            name: '',
            data: [53, 32, 33, 52, 32]
          },
          {
            name: '',
            data: [ 11, 9, 15, 11, 20]
          },
          {
            name: '',
            data: [9, 8, 6, 9, 4]
          },
          {
            name: '',
            data: [25, 12, 25, 24, 10]
          }
        ],
        chart: {
          type: 'bar',
          height: 350,
          width: 500,
          stacked: true,
          stackType: '100%'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 4 
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: ['Apple', 'Samsmung', 'Asus', 'Microsoft', 'Instagram']
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + 'K';
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          show: false
        }
      };
    return (
        <div className='w-full '>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <div className="w-3/5 border border-r-[#CED4DA]">
                    <div className='flex items-center justify-between bg-[#F4F6FC] py-4 px-6 mb-5 border border-b-[#CED4DA]'>
                        <p className='text-base font-bold'>Reports</p>
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
                        <button className='text-white bg-[#04B4FC] py-2 px-4 text-sm font-semibold rounded-sm'>Add New Product</button>
                    </div>
                    <div className=' px-6 flex justify-between items-center'>
                        <p className='text-base font-semibold'>Weekly Sales</p>
                        <p className='text-sm font-medium text-blue-400 cursor-pointer'> &lt;  Aug 19-25  &gt;</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <div className="mixed-chart rounded overflow-hidden" >
                            <Chart
                                options={options}
                                series={series}
                                type="heatmap"
                                width="700"
                                height="380"

                            />
                        </div>
                        <p>hhhhh</p>
                    </div>
                    <hr />
                    <div className='flex gap-2 px-6 py-2'>
                        <p className=' font-semibold'>Supplier Performance Report</p>
                        <p>(Top 5 Suppliers)</p>
                    </div>
                    <hr />
                    <div className="flex justify-center">
                        <div className="bg-white p-4 rounded-lg" style={{ width: '600px' }}>
                            <Chart options={chartConfig} series={chartConfig.series} type="bar" height={230} />
                        </div>
                    </div>
                </div>

                <div className='admin bg-white w-3/12 '>
                    <div className='flex justify-around items-center mt-4 mb-6'>
                        <div className='flex gap-2'>
                            <img src={Admin} className='w-9 h-9 rounded-full' />
                            <div className='bryan '>
                                <p className='text-sm font-semibold'>Bryan Doe</p>
                                <p className='text-xs'>Admin</p>
                            </div>
                        </div>
                        <CiMenuKebab size={30} className='border-2 p-1 rounded-md' />
                    </div>
                    <hr />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Reports