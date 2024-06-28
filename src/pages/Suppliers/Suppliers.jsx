import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/footer/Footer'
import Chart from 'react-apexcharts';
import { useTable } from 'react-table';
import { FaApple, FaMicrosoft, FaGoogle, FaAmazon, FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaSnapchat, FaYoutube } from 'react-icons/fa';
import Admin from '../../assets/images/admin.png';
import { CiMenuKebab, CiExport, CiDeliveryTruck } from "react-icons/ci";
import { BiMemoryCard } from "react-icons/bi";
import { BsBox2 } from "react-icons/bs";

const options = {
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
    enabled: true,
    style: {
      colors: ['#000']
    },
  },
  legend: {
    show: false
  },
  colors: ['#FF5733', '#33FFB8', '#3388FF', '#B833FF'],
};

const series = [44, 55, 41, 17]; // Performance data for the companies

const total = series.reduce((acc, value) => acc + value, 0);
const percentages = series.map(value => ((value / total) * 100).toFixed(2));


const Suppliers = () => {
  const data = React.useMemo(
    () => [
      {
        supplier: { name: 'Apple', icon: <FaApple color="#A2AAAD" /> },
        email: 'apple@gmail.com',
        contact: '123-456-7890',
        history: 'Order History'
      },
      {
        supplier: { name: 'Microsoft', icon: <FaMicrosoft color="#737373" /> },
        email: 'microsoft@gmail.com',
        contact: '234-567-8901',
        history: 'Order History'
      },
      {
        supplier: { name: 'Google', icon: <FaGoogle color="#4285F4" /> },
        email: 'google@gmail.com',
        contact: '345-678-9012',
        history: 'Order History'
      },
      {
        supplier: { name: 'Amazon', icon: <FaAmazon color="#FF9900" /> },
        email: 'amazon@gmail.com',
        contact: '456-789-0123',
        history: 'Order History'
      },
      {
        supplier: { name: 'Facebook', icon: <FaFacebook color="#3b5998" /> },
        email: 'facebook@gmail.com',
        contact: '567-890-1234',
        history: 'Order History'
      },
      {
        supplier: { name: 'Twitter', icon: <FaTwitter color="#1DA1F2" /> },
        email: 'twitter@gmail.com',
        contact: '678-901-2345',
        history: 'Order History'
      },
      {
        supplier: { name: 'LinkedIn', icon: <FaLinkedin color="#0077B5" /> },
        email: 'linkedin@gmail.com',
        contact: '789-012-3456',
        history: 'Order History'
      },
      {
        supplier: { name: 'Github', icon: <FaGithub color="#181717" /> },
        email: 'github@gmail.com',
        contact: '890-123-4567',
        history: 'Order History'
      },
      {
        supplier: { name: 'Instagram', icon: <FaInstagram color="#E1306C" /> },
        email: 'instagram@gmail.com',
        contact: '901-234-5678',
        history: 'Order History'
      },
      {
        supplier: { name: 'Snapchat', icon: <FaSnapchat color="#FFFC00" /> },
        email: 'snapchat@gmail.com',
        contact: '012-345-6789',
        history: 'Order History'
      },
      {
        supplier: { name: 'YouTube', icon: <FaYoutube color="#FF0000" /> },
        email: 'youtube@gmail.com',
        contact: '123-456-7890',
        history: 'Order History'
      }
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Supplier Name',
        accessor: 'supplier', // accessor is the "key" in the data
        Cell: ({ cell: { value } }) => (
          <div className="flex items-center ">
            {value.icon}
            <span className="ml-2 text-black text-xs">{value.name}</span>
          </div>
        ),
      },
      {
        Header: 'Email Address',
        accessor: 'email',
      },
      {
        Header: 'Contact Number',
        accessor: 'contact',
      },
      {
        // Header: 'Order History',
        accessor: 'history',
        Cell: ({ value }) => <span className="text-xs text-blue-500">{value}</span>,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className='w-full '>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className="w-3/5 border border-r-[#CED4DA]">
          <div className='flex items-center justify-between bg-[#F4F6FC] py-4 px-6 mb-5 border border-b-[#CED4DA]'>
            <p className='text-base font-bold'>Suppliers</p>
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
            <button className='text-white bg-[#04B4FC] py-2 px-4 text-sm font-semibold rounded-sm'>Edit Suppliers</button>
          </div>
          <div className='py-4 px-6'>
            <table {...getTableProps()} className="min-w-full ">
              <thead className="" >
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()} >
                    {headerGroup.headers.map(column => (
                      <th
                        {...column.getHeaderProps()}
                        className="px-6 py-3 text-left text-xs font-semibold  text-black-500 uppercase tracking-wider"
                      >
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="bg-white ">
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                        >
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
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

            <p className='mx-14 font-semibold mt-4'>Top Suppliers</p>
            <div className="flex justify-start items-center flex-col">
              <div className="mixed-chart mb-4">
                <Chart
                  options={options}
                  series={series}
                  type="pie"
                  width="335"
                />
              </div>
              <div className="font-normal mr-28 ">
                <ul>
                  {options.labels.map((label, index) => (
                     <li key={index} className="text-sm leading-8 " style={{ color: options.colors[index] }}>
                     {label} {percentages[index]}%
                   </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='flex justify-center p-4 cursor-pointer border-2 '>
        <p className='border-x-2 border-y-2 px-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white'> &lt;</p>
        <p className='border-x-2 border-y-2 px-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white'>1</p>
        <p className='border-x-2 border-y-2 px-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white'>2</p>
        <p className='border-x-2 border-y-2 px-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white'>3</p>
        <p className='border-x-2 border-y-2 px-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white'>4</p>
        <p className='border-x-2 border-y-2 px-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white'>5</p>
        <p className='border-x-2 border-y-2 px-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white'> &gt;</p>
      </div>

      <Footer />
    </div>
  )
}

export default Suppliers