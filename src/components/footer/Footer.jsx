import React from 'react';
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import FB from '../../assets/fb.svg';
import IG from '../../assets/ig.svg';
import twitter from '../../assets/twitter.svg';
import FooterLogo from '../../assets/footer_logo.svg';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="box">
            <div>
                <img src={FooterLogo} alt="wareview" />
            </div>
            <div>         
                <a href="">Dashboard</a>
                <a href="">Sales</a>
                <a href="">Banking</a>
                <a href="">Records</a>
                <a href="">Contact Us</a>
            </div>
        </div>
        <div className="box">
            <div>
                <p>Cultivating Efficency, Tracking Excellence - <br /> Your Trusted Inventory Management Partner</p>
            </div>      
            <div className='social_links space-x-6 '>
                <img src={FB} alt="facebook" />
                <img src={IG} alt="instagram" />
                <img src={twitter} alt="twitter" />
            </div>
            {/* <hr /> */}
        </div>
        <div className="box">
            <p>Privacy Policy</p>
            <p>&copy; 2023 Mugna Technologies, inc</p>
            <p>Terms & Conditions</p>
        </div>
    </div>
  )
}

export default Footer