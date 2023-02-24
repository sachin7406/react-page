import React from 'react'
import UIux from '../Image/ui-ux-universe.jpg'
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';
import { ArrowRightAlt } from '@mui/icons-material';

const Recpsurb = () => {
    return (
        <div className='project-container p-15 grid'>
            <Fade right direction>

                <div className="text project-text p-15">
                <div className="list-no p-15">
                        <h2>04.</h2>
                    </div>
                    
                    <div className="project-head smallText p-15 ">
                        <h5> <span> Repscrubs.UI/UX  </span> - Mobile App development.</h5>
                    </div>
                    <div className="project-shot-para p-15">
                        <p>Automated Perioperative Vendor Management Solution.</p>
                    </div>
                    <Fade clear cascade>
                    <div className="  link-box small-box Bb p-15">
                        <a href=" https://mantiqh.com/our-work/repscrubs">
                            <Link >Viwe Project <ArrowRightAlt /></Link>
                        </a>
                    </div>
                    </Fade>
                </div>
            </Fade>
            <Fade top direction>
                <div className="project-image p-15">
                    <img src={UIux} alt="" />
                </div>
            </Fade>
        </div>
    )
}

export default Recpsurb