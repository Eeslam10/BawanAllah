import React, { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { sales } from '../../utils/data';

const SalesData = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedRows, setCheckedRows] = useState(Array(5).fill(false));
  const [currentPage, setCurrentPage] = useState(1);
  const salesPerPage = 5;

  const toggleAll = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    setCheckedRows(checkedRows.map(() => newAllChecked));
  };

  const toggleRow = (index) => {
    const newCheckedRows = [...checkedRows];
    newCheckedRows[index] = !newCheckedRows[index];
    setCheckedRows(newCheckedRows);
    setAllChecked(newCheckedRows.every(Boolean));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(sales.length / salesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastRow = currentPage * salesPerPage;
  const indexOfFirstRow = indexOfLastRow - salesPerPage;
  const currentSales = sales.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="container mx-auto">
      <table className="min-w-full border-separate border-spacing-y-2">
        <thead className='text-[#5C6F88] text-xs font-bold bg-[#F4F6FC] p-36 whitespace-nowrap'>
          <tr>
            <th className="px-4 py-2">
              <input
                type="radio"
                checked={allChecked}
                onChange={toggleAll}
                className="form-radio"
              />
            </th>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Order Code</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Total Price</th>
            <th className="px-4 py-2">
                <select className="text-[#04B4FC] bg-transparent outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 14 Days</option>
                  <option>Last 30 Days</option>
                </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentSales.map((sale, index) => (
            <tr
              key={sale.id}
              className={`bg-white text-[#212529] text-xs text-center font-medium border rounded-lg ${index < currentSales.length - 1 ? 'mb-2' : ''}`}
            >
              <td className="px-4 py-2">
                <input
                  type="radio"
                  checked={checkedRows[index]}
                  onChange={() => toggleRow(index)}
                  className="form-radio"
                />
              </td>
              <td className="px-4 py-2">{sale.productName}</td>
              <td className="px-4 py-2">{sale.orderCode}</td>
              <td className="px-4 py-2">{sale.category}</td>
              <td className="px-4 py-2">{sale.quantity}</td>
              <td className="px-4 py-2">{sale.totalPrice}</td>
              <td className="px-4 py-2">
              <a href='#' className="text-[#04B4FC] hover:underline">
                  View Invoice
              </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-2 py-1 leading-tight text-gray-500 bg-white border border-[#DEE2E6] hover:bg-gray-100 hover:text-gray-700 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} `}
        >
          <RiArrowLeftSLine className="h-5 w-5 text-gray-500" />
        </button>
        {[...Array(Math.ceil(sales.length / salesPerPage)).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => handlePageClick(page + 1)}
            className={`px-2 py-1 leading-tight text-gray-500 bg-white border border-[#DEE2E6] hover:bg-gray-100 hover:text-[#04B4FC] ${currentPage === page + 1 ? 'bg-blue-500 text-white' : ''}`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(sales.length / salesPerPage)}
          className={`px-2 py-1 leading-tight text-gray-500 bg-white border border-[#DEE2E6] hover:bg-gray-100 hover:text-gray-700 ${currentPage === Math.ceil(sales.length / salesPerPage) ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} `}
        >
          <RiArrowRightSLine className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default SalesData;