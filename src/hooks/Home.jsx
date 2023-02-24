import React from 'react'
import { Link } from 'react-scroll';
import { ArrowRightAlt } from '@mui/icons-material';
import { Fade } from 'react-reveal';
const Home = () => {
    return (
        <div className='container'>
                <div className="main-container p-15">
                <Fade top cascade>
                    <div className="main-content-1 col p-15 big-text">
                        <h1>
                            Logic. The Simple Solution.
                        </h1>
                    </div>
                    </Fade>
                    <div className=" small-box p-15 hover-box ph-50">
                    <Fade top cascade>
                        <a href="https://mantiqh.com/our-work">
                            <div className="main-link-content  flex-small-box ">
                                <div className="side-text smallText">
                                    <h4>See our work</h4>
                                </div>
                                <div className="symbol">
                                    <Link to={Home}><a href="https://mantiqh.com/our-work"><ArrowRightAlt /> </a></Link>
                                </div>
                            </div>
                        </a>

                        <div className="main-down-text smallText ">
                            <p>We are product development and UX firm specialzing in digital serivice for the whole specturm</p>
                        </div>
                        </Fade>
                    </div>
                </div>
                
        </div>
    );
};

export default Home;
