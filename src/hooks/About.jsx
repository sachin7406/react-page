import React from 'react'
import { Fade } from 'react-reveal'
import Founder from './Founder'
// import Marquee from './Marquee'
// import Marquee1 from './Marquee1'

const About = () => {
  return (
    <div className='container'>

      <div className="line-text p-15">
          <Fade left cascade>
        <div className="line-text colline p-15">
        
          <h3 className='move'>Logic. The Simple Solution</h3>
          
        </div>
        </Fade>
        <div className=" line p-15">
          <ul className="flex slow">
            <li>Web developer</li>
            <li>UI / UX</li>
            <li>Custom software</li>
          </ul>
        </div>
        {/* <Marquee1/>
        <Marquee/> */}
      </div>
      <Founder />

    </div>
  )
}

export default About