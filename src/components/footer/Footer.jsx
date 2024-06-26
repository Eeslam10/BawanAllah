import React from 'react';
import '../footer/Footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const footer = () => {
  return (
    <div className='footer'>
        <div className="box">
            <h3>Wire<span>View</span></h3>
            <div>         
                <a href="">Dashboard</a>
                <a href="">Sales</a>
                <a href="">Banking</a>
                <a href="">Records</a>
                <a href="">Contact Us</a>
            </div>
        </div>
        <div className="box">
            <p>Cultivating Efficency, Tracking Excellence - <br /> Your Trusted Inventory Management Partner</p>
            <div>
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaInstagram className='icon'/>
            </div>
            <hr />
        </div>
        <div className="box">
            <p>Privacy Policy</p>
            <p>&copy; 2023 Mugna Technologies, inc</p>
            <p>Terms & Conditions</p>
        </div>
    </div>
  )
}

export default footer