import './Section1.css'
import React from 'react'
import image from './images/sectionimg.jpeg'

const Section1 = () => {
    return (
        <div className='section'>
            
            <div>
                <img src={image} alt='logo' />
            </div>
            <div className='Textsection'>
                <h1>THE LEADER IN <br /> INTERACTIVE VR</h1>
                <p>Founded in 2011. Loopholes has been producing world-class
                virtual reality projects for some of the best companies around the. Our award-winning creations have transformed
                businesses through digital experiences that are particular to their brand</p>
            </div>
            
        </div>
    )
}

export default Section1
