import React from 'react'
import DB from '../../assets/db.svg';
import inv from '../../assets/inv.svg';
import orders from '../../assets/orders.svg';
import reports from '../../assets/reports.svg';
import supplies from '../../assets/supplies.svg';

const sidebar1 = [
    { img:DB, text: "Dashboard", link: "" },
    { img: inv, text: "Inventory", link: "" },
    { img: orders, text: "Sales Order", link: "" },
    { img: reports, text: "Reports", link: "" },
    { img: supplies, text: "Supplies", link: "" },
  ];
//   const sidebar2 = [
//     { img: profile, text: "Profile" },
//     { img: notifications, text: "Notifications", children: <Badge /> },
//     { img: settings, text: "Settings", to: "/settings" },
//   ];

const Sidebar = () => {
  return (
    <div className="sidebar px-6 py-8 w-1/5 flex flex-col justify-between h-[100%] bg-white fixed">
      <div>
        {/* <img src={logo} className="w-48 mb-6" /> */}
        <ul className="border-b-[3px] w-full border-dashed">
          {sidebar1.map((link, i) => (
            <SidebarLink
              text={link.text}
              img={link.img}
              key={i}
              to={link.link}
            />
          ))}
        </ul>
        {/* <ul>
          {sidebar2.map((link, i) => (
            <SidebarLink text={link.text} img={link.img} key={i} to={link.to} />
          ))}
        </ul> */}
      </div>
    </div>
  )
}

export default Sidebar