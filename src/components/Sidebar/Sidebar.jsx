import React from 'react';
import DB from '../../assets/db.svg';
import inv from '../../assets/inv.svg';
import orders from '../../assets/orders.svg';
import reports from '../../assets/reports.svg';
import supplies from '../../assets/supplies.svg';
import help from '../../assets/help.svg';
import settings from '../../assets/settings.svg';
import SidebarLink from './SidebarLInks'; 

const sidebar1 = [
  { img: DB, text: "Dashboard", link: "/" },
  { img: inv, text: "Inventory", link: "/inventory" },
  { img: orders, text: "Sales Order", link: "/sales-order" },
  { img: supplies, text: "Suppliers", link: "/suppliers" },
  { img: reports, text: "Reports", link: "/reports" },
];

const sidebar2 = [
  { img: help, text: "Help", link: "/help" },
  { img: settings, text: "Settings", link: "/settings" },
];

const Sidebar = () => {
  return (
    <div className="sidebar px-6 py-8 w-1/5 hidden lg:flex flex-col justify-between h-screen bg-[#F4F5FC]">
      <div>
        <h1 className='text-sm text-[#6C757D] font-bold uppercase mb-3'>General</h1>
        <ul className="w-full ml-4">
          {sidebar1.map((link, i) => (
            <SidebarLink
              text={link.text}
              img={link.img}
              key={i}
              to={link.link}
            />
          ))}
        </ul>
        <div className='mt-5'>
          <h1 className='text-sm text-[#6C757D] font-bold uppercase mb-3'>Support</h1>
          <ul className='ml-4'>
            {sidebar2.map((link, i) => (
              <SidebarLink text={link.text} img={link.img} key={i} to={link.link} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;