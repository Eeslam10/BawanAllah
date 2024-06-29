import { useState } from 'react'
import { MdCancel } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
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

const MobileSidebar = () => {
    const [menubar, setmenubar] = useState(false);

  return (
    <div>
        <div className="lg:hidden absolute right-4 ml-4 -top-0">
        <BiMenuAltRight
          onClick={() => setmenubar(!menubar)}
          role="button"
          color="#AAA5F8"
          size={40}
        />
      </div>
      <div
        className={`w-[60%] fixed lg:hidden right-0 top-0 bottom-0 h-screen text-[#FFECE5] bg-[#F8F9FA] flex flex-col gap-8 px-5 z-10 ${
          menubar ? "translate-x-[0%]" : "translate-x-[100%] hidden"
        }`}
      >
        {" "}
        <div>
        <MdCancel onClick={() => setmenubar(!menubar)} size={40} />
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
    </div>
  )
}

export default MobileSidebar