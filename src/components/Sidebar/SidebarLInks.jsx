import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarLink = ({ img, text, to }) => {
  return (
    <li className="mb-2">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${
            isActive ? 'bg-[#04B4FC] text-white p-3 font-extrabold text-base' : ''
          } flex justify-start items-center text-[#212529] rounded-lg py-2 font-normal text-base relative`
        }
      >
        <img src={img} alt={`${text} icon`} className="w-4 h-4 mr-2" />
        {text}
      </NavLink>
    </li>
  );
};

export default SidebarLink;