import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Foot/Foot'
import Admin from '../../assets/images/admin.png';
import { CiMenuKebab } from "react-icons/ci";
import Chart from 'react-apexcharts';
import { SlPrinter } from "react-icons/sl";
import MobileSidebar from '../../components/Sidebar/MobileSidebar';


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
                data: [53, 32, 43, 52, 32,]
            },
            {
                name: '',
                data: [34, 69, 15, 11, 20]
            },
            {
                name: '',
                data: [50, 32, 55, 95, 64]
            },
            {
                name: '',
                data: [1032, 75, 54, 60]
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
            show: false,
        }
    };

    const chartConfige = {
        chart: {
            type: 'pie',
        },
        labels: ['Apple', 'Microsoft', 'Twitter', 'Google'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        dataLabels: {
            enabled: false,
            style: {
                colors: ['#000']
            },
        },
        legend: {
            show: false
        },
        colors: ['#FF5733', '#33FFB8', '#3388FF', '#B833FF'],
    };

    const performanceData = [44, 55, 41, 17]; // Performance data for the companies

    const total = performanceData.reduce((acc, value) => acc + value, 0);
    const percentages = performanceData.map(value => ((value / total) * 100).toFixed(2));

    return (
        <div className="w-full">
            <Navbar />

            <MobileSidebar />
            <div className="flex ">
                <Sidebar />
                <div className="w-full lg:w-3/5 border border-r-[#CED4DA]">
                    <div className="flex items-center justify-between bg-[#F4F6FC] py-4 px-6 mb-5 border border-b-[#CED4DA]">
                        <p className="text-base font-bold">Reports</p>
                        <button className="lflex gap-2 text-white bg-[#04B4FC] py-2 px-4 text-xs lg:text-sm font-semibold rounded-md flex items-center w">
                            <SlPrinter size={25} />
                            Print Reports
                        </button>
                    </div>
                    <div className=' lg:hidden block mb-4'>
                        <p className="text-base ml-6 font-semibold mt-0">Top Suppliers</p>
                        <div className="flex justify-start items-center flex-row lg:flex-col">
                            <Chart options={chartConfige} series={performanceData} type="pie" width="400" />
                           <div className="font-normal ">
                            <ul className='flex flex-wrap lg:mt-8'>
                                {chartConfige.labels.map((label, index) => (
                                    <li key={index} className="text-sm leading-8" style={{ color: chartConfige.colors[index] }}>
                                        {label} - {percentages[index]}%
                                    </li>
                                ))}
                            </ul>
                            <hr />
                        </div>
                        </div>
                    </div>
                    <div className="px-6 flex justify-between items-center">
                        <p className="text-base font-semibold">Weekly Sales</p>
                        <p className="text-sm font-medium text-blue-400 cursor-pointer">
                            &lt; Aug 19-25 &gt;
                        </p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <div className="mixed-chart rounded overflow-hidden" style={{ width: '100%', maxWidth: '700px' }}>
                            <Chart
                                options={options}
                                series={series}
                                type="heatmap"
                                width="100%"
                                height="380"

                            />
                        </div>
                        {/* <p>hhhhh</p> */}
                    </div>
                    <hr />
                    <div className=" text-center py-2">
                        <p className="font-semibold text-base sm:text-sm ">Supplier Performance Report</p>
                        <p className='text-base sm:text-sm'>(Top 5 Suppliers)</p>
                    </div>
                    <hr />
                    <div className="horizontal flex justify-center">
                        <div className="bg-white p-4" style={{ width: '600px' }}>
                            <Chart options={chartConfig} series={chartConfig.series} type="bar" height={220} />
                        </div>
                    </div>
                </div>
                
                <div className="w-3/12 bg-white">
                    <div className="lg:flex justify-around mt-4 mb-6 hidden">
                        <div className='flex justify-around'>

                        <div className="flex gap-2  ">
                            <img src={Admin} className="w-9 h-9 rounded-full" />
                            <div className="bryan">
                                <p className="text-sm font-semibold">Bryan Doe</p>
                                <p className="text-xs">Admin</p>
                            </div>
                        </div>
                        <CiMenuKebab size={30} className="border-2 p-1 rounded-md" />
                        </div>
                    </div>
                    <hr />

                 

                    <div className='hidden lg:block'>

                        <div className="flex justify-start items-center flex-col">
                            <p className="text-center font-semibold mt-4">Top Suppliers</p>
                            <Chart options={chartConfige} series={performanceData} type="pie" width="320" />
                        </div>
                        <div className="font-normal text-center">
                            <ul>
                                {chartConfige.labels.map((label, index) => (
                                    <li key={index} className="text-sm leading-8" style={{ color: chartConfige.colors[index] }}>
                                        {label} - {percentages[index]}%
                                    </li>
                                ))}
                            </ul>
                            <hr className="mt-12" />
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <div>
                            <p className="font-semibold text-lg text-center mt-4">Reports for last Month</p>
                            <p className="text-base text-center">From 01 Jul - 21 Jul</p>
                            <div className="flex justify-center items-center gap-8 text-sm my-8">
                                <button className="text-white bg-blue-400 rounded px-4 py-2">Download PDF</button>
                                <p className="text-blue-400 cursor-pointer">View</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <p className="font-semibold text-lg text-center mt-2">Defect Rate Report</p>
                            <p className="text-base text-center">Product Defect & Supply Origin</p>
                            <div className="flex justify-center items-center gap-8 text-sm my-8">
                                <button className="text-white bg-purple-700 rounded px-4 py-2">Download PDF</button>
                                <p className="text-purple-700 cursor-pointer">View</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div className='block lg:hidden'>
                        <div>
                            <p className="font-semibold text-lg text-center mt-2">Reports for last Month</p>
                            <p className="text-base text-center">From 01 Jul - 21 Jul</p>
                            <div className="flex justify-center items-center gap-8 text-sm my-4">
                                <button className="text-white bg-blue-400 rounded px-4 py-2">Download PDF</button>
                                <p className="text-blue-400 cursor-pointer">View</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <p className="font-semibold text-lg text-center mt-2">Defect Rate Report</p>
                            <p className="text-base text-center">Product Defect & Supply Origin</p>
                            <div className="flex justify-center items-center gap-8 text-sm my-8">
                                <button className="text-white bg-purple-700 rounded px-4 py-2">Download PDF</button>
                                <p className="text-purple-700 cursor-pointer">View</p>
                            </div>
                        </div>
                    </div>
            <Footer />
        </div>
    );

}

export default Reports