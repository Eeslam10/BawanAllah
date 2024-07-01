import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import FooterLogo from '../../assets/footer_logo.svg';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="box flex flex-col lg:flex-row lg:justify-between m-6 pb-4">
            <div>
                <img src={FooterLogo} alt="wareview" />
            </div>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 font-semibold '>         
                <a href="" className=''>Dashboard</a>
                <a href="" className=''>Sales</a>
                <a href="" className=''>Banking</a>
                <a href="" className=''>Records</a>
                <a href="" className=''>Contact Us</a>
            </div>
        </div>
        <div className="box flex flex-col lg:flex-row lg:justify-between m-6">
            <div>
                <p>Cultivating Efficency, Tracking Excellence - <br /> Your Trusted Inventory Management Partner</p>
            </div>      
            <div className='social_links space-x-6 flex'>
                <FaTwitter size={30} color='#33A6FF'className='cursor-pointer'/>
                <FaFacebook size={30} color='#33A6FF'className='cursor-pointer'/>
                <FaInstagram size={30} color='#33A6FF'className='cursor-pointer'/>
            </div>
        </div>
            <hr className='border-2 mx-4'/>
        <div className="box flex flex-col lg:flex-row lg:justify-between justify-between m-6" >
            <p>Privacy Policy</p>
            <p>&copy; 2023 Mugna Technologies, inc</p>
            <p>Terms & Conditions</p>
        </div>
    </div>
  )
}

export default Footer