import './Footer.css'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
           <div className='footer_left'>
               <h3>loopstudios</h3>
               <a href='https://thatsthefinger.com/'>About</a>
                <a href='http://www.everydayim.com/'>Careers</a>
                <a href='https://hackertyper.com/'>Events</a>
                <a href='https://www.trashloop.com/'>Products</a>
                <a href='https://zoomquilt.org/'>Support</a>
           </div>
           <div className='footer_right'>
           <i class="fab fa-facebook-square"></i>
           <i class="fab fa-twitter"></i>
           <i class="fab fa-pinterest-square"></i>
           <i class="fab fa-instagram"></i>
           <address>© 2021 loopstudios. All rights reserved</address>
           </div>           
        </div>
    )
}

export default Footer
