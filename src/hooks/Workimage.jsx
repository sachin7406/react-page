import React from 'react'
import UIUX from '../Image/ui-ux-universe.jpg'
import Dev from '../Image/devlopment.jpg'
import { Fade } from 'react-reveal';
const Workimage = () => {
    return (
        <div className="work-section container grid p-15">
              <Fade left direction>
            <div className="work-inner-content grid">
                <div className="work-image p-15">
                    <img src={UIUX} alt="" />
                </div>
                <div className="work-text p-15">
                    <div className="list-no">
                        <h2>01.</h2>
                    </div>
                    <div className="list-text grid-box">
                        <h1 className="list-head ">UX / UI</h1>
                        <ul className='grid-box lists'>
                            <li>Mobile Design</li>
                            <li>Web Design</li>
                            <li>Product Design</li>
                            <li>UX/UI Consulting</li>
                        </ul>
                    </div>
                </div>
            </div>
            </Fade>
            {/* ############################33 */}
            <Fade left direction>
            <div className="work-inner-content grid p-15">
                <div className="work-image p-15">
                    <img src={Dev} alt="" />
                </div>
                <div className="work-text p-15 ">
                    <div className="list-no">
                        <h2>02.</h2>
                    </div>
                    <div className="list-text grid-box ">
                        <h1 className="list-head">Development</h1>
                        <ul className='grid-box lists'>
                            <li>Website</li>
                            <li>Mobile Application</li>
                            <li>Custom / Enterprise Application</li>
                            <li>On Premise & Cloud Based Application</li>
                            <li>Software Testing & Maintenance</li>
                        </ul>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Workimage
