import React from 'react'
import Web1 from '../Image/Web1.gif'
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';
import { ArrowRightAlt } from '@mui/icons-material';
const Bluesparq = () => {
    return (
        <div>

            <div className='project-container p-15 grid-scroll'>
                <Fade top direction>

                    <div className="text project-text p-15">
                        <div className="list-no p-15">
                            <h2>06.</h2>
                        </div>
                        <div className="project-head smallText p-15 ">
                            <h5> <span> Bluesparq.UX/UI</span>  - Web App Development.</h5>
                        </div>
                        <div className="project-para p-15">
                            <p> Blue Sparq, Inc. is a product development company specializing in control system design and manufacturing. Located in Cape Coral, Florida, BLUE SPARQ is capable of custom electronics design, firmware development, GUI design and development, </p>
                        </div>
                        <Fade clear cascade>
                            <div className="  link-box small-box Bb p-15">
                                <a href="https://mantiqh.com/our-work/bluesparq">
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
        </div>
    )
}

export default Bluesparq
