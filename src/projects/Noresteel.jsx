import React from 'react'
import Web1 from '../Image/Web4.gif'
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';
import { ArrowRightAlt } from '@mui/icons-material';
const Noresteel = () => {
  return (
    <div>
      
      <div className='project-container p-15 grid'>
            
            <Fade left direction>
                <div className="text project-text p-15">
                    <div className="list-no p-15">
                        <h2>07.</h2>
                    </div>
                    <div className="project-head smallText p-15 ">
                        <h5> <span>NORSTEEL BUILDINGS.UX/UI</span>   - Wordpress Web Development.</h5>
                    </div>
                    <div className="project-para p-15">
                        <p>Norsteel buildings is North Americas leading provider of commercial, industrial, and residential steel buildings, since 2001, they have built a reputation for designing and building structures that are sturdy, cost-</p>
                    </div>
                    <Fade clear cascade>
                    <div className="  link-box small-box Bb p-15">
                        <a href="https://mantiqh.com/our-work/norsteel">
                            <Link >Viwe Project <ArrowRightAlt /></Link>
                        </a>
                    </div>
                    </Fade>
                </div>
            </Fade>
            <Fade down direction>
                <div className="project-image p-15">
                    <img src={Web1} alt="" />
                </div>
            </Fade>

        </div>
    </div>
  )
}

export default Noresteel
