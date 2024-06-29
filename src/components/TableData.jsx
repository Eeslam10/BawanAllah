import React, { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { rows } from '../utils/data';


const TableData = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedRows, setCheckedRows] = useState(new Array(14).fill(false));
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  const handleAllCheck = () => {
    const newCheckedRows = currentRows.map(() => !allChecked);
    setAllChecked(!allChecked);
    setCheckedRows(prevCheckedRows => {
      const updatedCheckedRows = [...prevCheckedRows];
      currentRows.forEach((row, index) => {
        updatedCheckedRows[indexOfFirstRow + index] = !allChecked;
      });
      return updatedCheckedRows;
    });
  };

  const handleRowCheck = (index) => {
    const updatedCheckedRows = [...checkedRows];
    updatedCheckedRows[indexOfFirstRow + index] = !updatedCheckedRows[indexOfFirstRow + index];
    setCheckedRows(updatedCheckedRows);
    setAllChecked(updatedCheckedRows.slice(indexOfFirstRow, indexOfLastRow).every(row => row));
  };


  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(rows.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="p-4">
      <table className="min-w-full bg-white">
        <thead className='text-xs text-[#5C6F88] font-bold'>
          <tr>
            <th className="py-2 px-4">
              <input
                type="checkbox"
                checked={allChecked}
                onChange={handleAllCheck}
                className="form-checkbox"
              />
            </th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Code</th>
            <th className="py-2 px-4">Type</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Image</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr key={row.id} className="bg-[#F4F5FC] text-center text-xs text-[#212529] font-medium hover:bg-gray-100 border border-gray-200 my-2 rounded-lg">
              <td className="py-2 px-4">
                <input
                  type="checkbox"
                  checked={checkedRows[indexOfFirstRow + index]}
                  onChange={() => handleRowCheck(indexOfFirstRow + index)}
                  className="form-checkbox"
                />
              </td>
              <td className="py-2 px-4">{row.name}</td>
              <td className="py-2 px-4">{row.code}</td>
              <td className="py-2 px-4">{row.type}</td>
              <td className="py-2 px-4">{row.price}</td>
              <td className="py-2 px-4 text-center">{row.quantity}</td>
              <td className="py-2 px-4">
                <img src={row.image} alt={row.name} className="w-16 h-16 object-cover rounded-md" />
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
        {[...Array(Math.ceil(rows.length / rowsPerPage)).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => handlePageClick(page + 1)}
            className={`px-2 py-1 leading-tight text-gray-500 bg-white border border-[#DEE2E6] hover:bg-gray-100 hover:text-gray-700 ${currentPage === page + 1 ? 'bg-blue-500 text-white' : ''}`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(rows.length / rowsPerPage)}
          className={`px-2 py-1 leading-tight text-gray-500 bg-white border border-[#DEE2E6] hover:bg-gray-100 hover:text-gray-700 ${currentPage === Math.ceil(rows.length / rowsPerPage) ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} `}
        >
          <RiArrowRightSLine className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default TableData;