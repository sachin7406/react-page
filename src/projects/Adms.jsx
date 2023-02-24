import React from 'react'
import Web1 from '../Image/web6.gif'
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';
import { ArrowRightAlt } from '@mui/icons-material';

const Adms = () => {
    return (
        <div className='project-container p-15 grid-scroll'>
            <Fade down direction>

                <div className=" project-text p-15">
                    <div className="list-no p-15">
                        <h2>05.</h2>
                    </div>

                    <div className="project-head smallText p-15 ">
                        <h5> <span> ADMS.UI/UX, </span> Website development.</h5>
                    </div>
                    <div className="project-shot-para p-15">
                        <p>Lead the way towards seamless and sustainable mobility.</p>
                    </div>
                    <Fade clear cascade>
                        <div className="  link-box small-box Bb p-15">
                            <a href="https://mantiqh.com/our-work/adms">
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

export default Adms