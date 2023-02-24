import React from 'react'
import Logo from "../Image/Logo.png";
import { GitHub } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { ArrowRightAlt } from '@mui/icons-material';

const Footer = () => {
    return (
        <div className='container footer ph-50 '>
            <div className="footer-text  ">
                <h1 className='footer-text-h1'>Let 's Make Something Together</h1>
                <p className='footer-text-p'>Start by  saying hi</p>
            </div>
            <nav className='footer-nav p-15'>
                <div className="nav-logo-container small-box fotter-logo">
                    <img src={Logo} alt="" />
                </div>

                <div className="nav-content-1 Bu small-box text p-15">
                    <div className="text">
                        <p> Our team is small but we have room for more</p>
                    </div>
                    <div className='post'>
                        <a href="https://mantiqh.com/about-us#work-with-us"> Open position </a><ArrowRightAlt />
                    </div>
                </div>
                <div className="nav-content-2 Bu small-box text  p-15 ">
                    <div className="text-1">
                        <p>hello@mantiqh.com</p>
                        <p>+91 8884612342</p>
                    </div>
                    <div class="social-icon">
                        <div className="social-media">
                            <a href="https://github.com/sachin7406" className='github'><GitHub className='icon' /></a>
                            <a href="https://www.instagram.com/sachin.patil___/" className='insta' ><Instagram className='icon' /></a>
                            <a href="https://www.linkedin.com/in/sachin-patil-717842172" className='linkdin'><LinkedIn className='icon' /></a>
                        </div>
                    </div>
                </div>
                <div className="nav-content-3  Bu small-box p-15">
                    <div className="addres-main-p-15 ">
                        <h5>Headquarters: </h5>
                        <p className='add-head'>91 Springboard, Padmavathi Complex, 3rd Floor, 80 Feet Rd, Koramangala 8th Block, Bengaluru 560095.</p>
                    </div>
                    <div className="addres-main-p-15 ">
                        <h5>Branch Office: At - </h5>
                        <p className='add-head'>Taqwa Builds, 2nd Floor, Shop no 5, CTS NO 10649, Opposite D-MART, Nehru Nagar, Belgaum, 590010.</p>
                    </div>


                </div>
            </nav>
        </div>
    )
}

export default Footer