import React from 'react'
import './home.css';
import About from "./about.js"
import Projects from "./projects.js"
import Art from "./art.js"
import Writing from "./writing.js"
import Music from "./music.js"

const LeftPanel = ({isAboutClicked , isProjectsClicked, isArtClicked, isWritingClicked, isMusicClicked}) => {

    const isPageSpaceClicked = () => {
        if(isAboutClicked || isProjectsClicked || isArtClicked || isWritingClicked  || isMusicClicked){
            return true;
        }
        return false;
    };

    const pageRefresh = () => window.location.reload(true)

    return (
        <div className="bg-white float-left h-screen w-7/12 overflow-y-scroll" id="leftpanel">
            <h1 id="name" className="text-8xl cursor-pointer w-1/2" onClick={pageRefresh}>Lord<br></br> Crawford</h1>
            <div id="content">
                {isAboutClicked ? <About/> : null}
                {isProjectsClicked ? <Projects/> : null}
                {isArtClicked ? <Art/> : null}
                {isWritingClicked ? <Writing/> : null}
                {isMusicClicked ? <Music/> : null}
            </div>
            {isPageSpaceClicked() 
                ? null
                : 
                <div>
                    <div id="summary">
                        multi-disciplinary creation<br/>
                        current work: lord.live<br/> <br/>
                        Based in New York City<br/><br/>
                        <div id="quote">I created this website to serve as a space for my ideas 
                        and passions to intermingle. <br/> I hope it inspires others to create a space for 
                        their dreams to live.</div>
                    </div>
                </div>
            }

        </div>
    )
}

export default LeftPanel