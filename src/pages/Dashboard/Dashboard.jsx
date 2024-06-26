import React from 'react';
import './Dashboard.css'
import { IoIosSearch } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { BsBoxSeam } from "react-icons/bs";
import { CiShoppingCart, CiDeliveryTruck,  CiSettings } from "react-icons/ci";
import { PiChartLineUpLight } from "react-icons/pi";
import { CgDanger } from "react-icons/cg";

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <nav>
            <div className="h2"><h2>Bawan<span>Allah</span></h2> </div>
            <div className="search"> <IoIosSearch style={{position: 'relative', left: '1.5rem', top: '3px', cursor: 'pointer'}}/> 
            <input type="text" placeholder='Search' />
            </div>
        </nav>
    
        <div className="container">
            <div className="sideBar"> 
                    <h6>GENERAL</h6>             
                    <div className="bar"> <RxDashboard /> <p>DASHBOARD</p> </div>
                    <div className="bar"> <BsBoxSeam/> <p>INVENTORY</p></div>
                    <div className="bar"> <CiShoppingCart/> <p>SALES ORDER</p></div>
                    <div className="bar"> <CiDeliveryTruck/> <p>Suppliers</p></div>
                    <div className="bar"> <PiChartLineUpLight/> <p>Reports</p></div>
                    <h6>SUPPORT</h6>
                    <div className="bar"> <CgDanger/> <p>HELP</p></div>
                    <div className="bar"> <CiSettings/> <p>SETTING</p></div>

            </div>
            <main>
                <div className="sales">
                    
                </div>
            </main>
            <div className="admin">
            
            </div>
        </div>
    </div>
  )
}

export default Dashboard