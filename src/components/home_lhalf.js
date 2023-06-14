import React from 'react'
import './home.css';

const LeftPanel = () => {
    return (
        <div className="bg-white float-left h-screen w-7/12" id="leftpanel">
            <h1 id="name" className="text-8xl">Lord<br></br> Crawford</h1>
            <div id="summary">
                multi-disciplinary creation<br></br>
                current work: lord.live<br></br> <br></br>
                Based in San Francisco
            </div>
        </div>
    )
}

export default LeftPanel