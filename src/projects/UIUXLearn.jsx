import React from 'react'
import Web2 from '../Image/Web2.gif'
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';
import { ArrowRightAlt } from '@mui/icons-material';

const UIUXLearn = () => {
    return (
        <div className='project-container p-15 grid-scroll'>
            
            <Fade top direction>
                <div className="text project-text p-15">
                    <div className="list-no p-15">
                        <h2>02.</h2>
                    </div>
                    <div className="project-head smallText p-15 ">
                        <h5> <span>L-earn App.UX/UI</span>  - Mobile App Development - Web App Development.</h5>
                    </div>
                    <div className="project-para p-15">
                        <p>L-earn App checks your test preparation health by giving you curated contests questions and each test is backed by AI-Powered reports and analytics that will help target your areas that need attention. And you even get an opportunity</p>
                    </div>
                    <Fade clear cascade>
                    <div className="  link-box small-box Bb p-15">
                        <a href="https://mantiqh.com/our-work/learn-app">
                            <Link >Viwe Project <ArrowRightAlt /></Link>
                        </a>
                    </div>
                    </Fade>
                </div>
            </Fade>
            <Fade left direction>
                <div className="project-image p-15">
                    <img src={Web2} alt="" />
                </div>
            </Fade>

        </div>
    )
}

export default UIUXLearn
