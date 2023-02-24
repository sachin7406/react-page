import React from 'react'
import Adms from '../projects/Adms'
import Bluesparq from '../projects/Bluesparq'
import Noresteel from '../projects/Noresteel'
import Qplease from '../projects/Qplease'
import Recpsurb from '../projects/Recpsurb'
import UIUX from '../projects/UIUX'
import UIUXLearn from '../projects/UIUXLearn'

const Project = () => {
  return (
    <div className='container p-15'>
      <div className="wrapper">
        <div className="item">
      <UIUX />
        </div>
        <div className="item">
        <UIUXLearn />

        </div>
        <div className="item">
        <Qplease/>

        </div>
        <div className="item">
        <Recpsurb/>

        </div>
        <div className="item">
        <Adms/>

        </div>
        <div className="item">
        <Bluesparq />

        </div>
        <div className="item">
        <Noresteel/>

        </div>
      </div>
      
    </div>
  )
}

export default Project