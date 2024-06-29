import React from 'react';
import Chart from 'react-apexcharts';

const SalesChart = () => {
  const options = {
    chart: {
      id: 'sales-chart',
      toolbar: {
        show: false, 
      },
    },
    grid: {
        show: false,
    },
    yaxis: {
        categories: [5000, 10000, 15000, 20000, 25000],
      },
    xaxis: {
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',],
    },
    stroke: {
      curve: 'smooth',
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
      },
      colors: ['#04B4FC', '#6C11D9', '#212529'],
      tooltip: {
        enabled: true, 
      },
  
  };

  const series = [
    {
      name: 'Direct Sales',
      data: [5000, 10000, 15000, 20000, 25000, 5000, 10000, 15000, 20000, 19000, 5000, 10000],
    },
    {
        name: 'Retail Sales',
        data: [4500, 4900, 6000, 7100, 11000, 18500, 13000, 5000, 14000, 6000, 5500, 7000],
      },
    {
      name: 'Wholesale Sales',
      data: [8500, 16500, 15500, 17500, 16500, 8500, 18500, 10500, 18500, 12500, 8500, 18500],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white ">
        <p className='font-semibold text-base'>Sales Report</p>
      <Chart options={options} series={series} type="line" height="400" />
    </div>
  );
};

export default SalesChart;
