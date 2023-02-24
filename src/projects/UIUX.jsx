import React from 'react'
import Web1 from '../Image/Web5.gif'
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';
import { ArrowRightAlt } from '@mui/icons-material';

const UIUX = () => {
    return (
        <div className='project-container  project-mainp-15  grid '>
            <Fade top direction> 

                <div className="text project-text p-15">
                    <div className="list-no p-15">
                        <h2>01.</h2>
                    </div>
                    <div className="project-head smallText p-15 ">
                        <h5> <span>The ParTimer.</span> UX/UI - Mobile App Development - Branding.</h5>
                    </div>
                    <div className="project-para p-15">
                        <p> Stackdevlabs project
                            The partimer is a dedicated platform for part-time jobs and simplified application processes in the UK. From job advert to (remote) handshake, they provide an end-to-end solution for part time recruitment.</p>
                    </div>
                    <Fade clear cascade>
                        <div className="  link-box small-box Bb p-15">
                            <a href=" https://mantiqh.com/our-work/PartTimer">
                                <Link >Viwe Project <ArrowRightAlt /></Link>
                            </a>
                        </div>
                    </Fade>
                </div>
            </Fade>
            <Fade left direction>
                <div className="project-image p-15">
                    <img src={Web1} alt="" />
                </div>
            </Fade>
        </div>
    )
}

export default UIUX
