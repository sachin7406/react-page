import React from 'react'
import { Link } from 'react-scroll';
import { ArrowRightAlt } from '@mui/icons-material';
import { Fade } from 'react-reveal';
import Co from '../Image/Co.png';
import Md from '../Image/Md.png';
const Founder = () => {
    return (
        <div className='container'>
            <Fade clear cascade>
                <div className="text  p-15 ">
                    <div className=" text p-15 flex">
                        <div className="smallText small-box p-15 Bb">
                            <h4 >Founder</h4>
                        </div>
                        <div className="link-box p-15 len">
                            <a href="https://mantiqh.com/about-us#Founder">
                                <Link>About us <ArrowRightAlt /></Link>
                            </a>
                        </div>
                    </div>
                </div>

            </Fade>

            <div className="founders">
                <div className="co founder-image">
                    <img src={Co} alt="" />
                    <div className="info smallText p-15">
                        <h5>Mohammad Qhizer Jameel</h5>
                        <p>Co-Founder and CEO</p>
                    </div>
                </div>
                <div className="md founder-image">
                    <img src={Md} alt="" />
                    <div className="info smallText p-15">
                        <h5>Mujtaba Ahmed</h5>
                        <p>Sales director UK</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Founder
