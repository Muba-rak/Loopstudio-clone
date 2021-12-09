import './Main.css'
import Section1 from './Section1'
import Lastsection from './Lastsection'
import Gridsection from './Gridsection'

import React from 'react'

const Main = () => {
    return (
        <div className='MainSection'>
            <Section1 />
            <Lastsection></Lastsection>
            <Gridsection />


            
        </div>
    )
}

export default Main
