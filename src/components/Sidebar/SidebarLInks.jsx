import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function SidebarLInks({ img, text, children = "", to ='' }) {
  return (
    <Link to={to}>
      <div className="flex justify-start items-center text-[#212529] font-normal text-base relative">
        <img src={img} className="w-4 h-4 mr-2" />
        {text}
        {children}
      </div>
    </Link>
  );
}

export default SidebarLInks;