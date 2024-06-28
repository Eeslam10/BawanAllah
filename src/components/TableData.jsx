import React, { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Mac from '../assets/mac.svg';
import Buds from '../assets/buds.svg';
import Fold from '../assets/fold.svg';
import iphone from '../assets/iphone.svg';
import keyboard from '../assets/keyboard.svg';
import mouse from '../assets/mouse.svg';
import tv from '../assets/tv.svg';

const TableData = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedRows, setCheckedRows] = useState(new Array(14).fill(false));
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;  // Set rows per page to 7

  const handleAllCheck = () => {
    setAllChecked(!allChecked);
    setCheckedRows(new Array(14).fill(!allChecked));
  };

  const handleRowCheck = (index) => {
    const updatedCheckedRows = [...checkedRows];
    updatedCheckedRows[index] = !updatedCheckedRows[index];
    setCheckedRows(updatedCheckedRows);
    setAllChecked(updatedCheckedRows.every(row => row));
  };

  const rows = [
    { id: 1, name: 'Mackbook Pro', code: '#0001', type: 'Laptop', price: '$1,241', quantity: 44, image: Mac },
    { id: 2, name: 'Iphone14 pro', code: '#0002', type: 'Phone', price: '$1,499', quantity: 23, image: iphone },
    { id: 3, name: 'Zoom75', code: '#0003', type: 'Keyboard', price: '$215', quantity: 23, image: keyboard },
    { id: 4, name: 'Airpods Pro', code: '#0004', type: 'Earphones', price: '$249', quantity: 23, image: Buds },
    { id: 5, name: 'Samsung Galaxy Fold', code: '#0005', type: 'Phone', price: '$1,199', quantity: 23, image: Fold },
    { id: 6, name: 'Samsung Odyssey', code: '#0006', type: 'Displays', price: '$500', quantity: 23, image: tv },
    { id: 7, name: 'Longitech Superlight', code: '#0007', type: 'Displays', price: '$500', quantity: 23, image: mouse },
    { id: 8, name: 'Mackbook Pro', code: '#0008', type: 'Laptop', price: '$1,241', quantity: 44, image: Mac },
    { id: 9, name: 'Iphone14 pro', code: '#0009', type: 'Phone', price: '$1,499', quantity: 23, image: iphone },
    { id: 10, name: 'Zoom75', code: '#0010', type: 'Keyboard', price: '$215', quantity: 23, image: keyboard },
    { id: 11, name: 'Airpods Pro', code: '#0011', type: 'Earphones', price: '$249', quantity: 23, image: Buds },
    { id: 12, name: 'Samsung Galaxy Fold', code: '#0012', type: 'Phone', price: '$1,199', quantity: 23, image: Fold },
    { id: 13, name: 'Samsung Odyssey', code: '#0013', type: 'Displays', price: '$500', quantity: 23, image: tv },
    { id: 14, name: 'Longitech Superlight', code: '#0014', type: 'Displays', price: '$500', quantity: 23, image: mouse },
  ];

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
            <tr key={row.id} className="bg-[#F4F5FC] text-xs text-[#212529] font-medium hover:bg-gray-100 border border-gray-200 my-2 rounded-lg">
              <td className="py-2 px-4 text-center">
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
          className={`p-2 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} `}
        >
          <RiArrowLeftSLine className="h-5 w-5 text-gray-500" />
        </button>
        <span className="mx-2 text-gray-700">
          Page {currentPage} of {Math.ceil(rows.length / rowsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(rows.length / rowsPerPage)}
          className={`p-2 ${currentPage === Math.ceil(rows.length / rowsPerPage) ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} `}
        >
          <RiArrowRightSLine className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default TableData;