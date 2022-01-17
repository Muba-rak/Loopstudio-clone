import './Gridsection.css'
import React from 'react'
import img1 from './images/img1.jpeg'
import img2 from './images/img2.jpeg'
import img3 from './images/img3.jpeg'
import img4 from './images/img4.jpeg'
import img5 from './images/img5.jpeg'
import img6 from './images/img6.jpeg'
import img7 from './images/img7.jpeg'
import img8 from './images/img8.jpeg'


const Gridsection = () => {
    return (
        <div>
            <div className='gridsection'>
                <div class="one"><img src={img1} alt='' /></div>
                <div class="one"><img src={img2} alt='' /></div>
                <div class="one"><img src={img3} alt='' /></div>
                <div class="one"><img src={img4} alt='' /></div>
                <div class="one"><img src={img5} alt='' /></div>
                <div class="one"><img src={img6} alt='' /></div>
                <div class="one"><img src={img7} alt='' /></div>
                <div class="one"><img src={img8} alt='' /></div>
            </div>



        </div>
    )
}

export default Gridsection
