import React from 'react'
import { Link } from 'react-scroll';
import { ArrowRightAlt } from '@mui/icons-material';
import Workimage from './Workimage';
import Home from './Home';
import { Fade } from 'react-reveal';


const Work = () => {
    return (
        <div className='container'>
            <div className="small-box ph-50">
            <Fade top cascade>
                <div className=" hover-box p-15 p-15 flex-small-box work-link-content">
                    <div className="smallText work-text">
                        <h4>We love what we do here</h4>
                    </div>
                    <div className="symbole">
                        <Link to={Work}><ArrowRightAlt /></Link>
                    </div>
                </div>
                </Fade>
            </div>
            <Workimage />
            <div className="work-down-content p-15 flex">
           <Fade left direction>

                <div className="smallText small-box flex-small-box p-15 Bb">
                    <h4 >our work</h4>
                </div>
                <div className="link-box len">
                <a href="https://mantiqh.com/our-work">
                    <Link to={Home}>See all Project <ArrowRightAlt /></Link>
                </a>
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default Work
    ;