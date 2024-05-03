import React from 'react'
import { useNavigate } from "react-router-dom";

import TabSpace from './tab_space.js'
import ContentSpace from './content_space.js'
import MagmaAnimation from "./animations/animation1.js";
import ColorCircles from "./animations/animation2.js";
import StarfieldAnimation from "./animations/animation3.js"
import './home.css';

var colorSet = ["#4A5AED", "#FFC701" , "#C8FF2B", "#C31E46", "#A66C15", 
                "#4800A4", "#56FF85", "#FF3D00" , "#E37575",
                "#B27AFA", "#F90", "#727D2B", "#1AF3F3", "#DDE993", "#FF00E5"]

const RightPanel = () => {
  
    const navigate = useNavigate()

    const goToAbout=()=>{
        navigate("/about");
    }
    const goToArt=()=>{
        navigate("/art");
    }

    const goToProjects=()=>{
        navigate("/projects");
    }

    const goToMusic=()=>{
        navigate("/music");
    }

    const goToWriting=()=>{
        navigate("/writing");
    }

    return (
        <div className="float-right flex flex-wrap h-screen" id="rightpanel">
            <TabSpace color={colorSet[0]} pagename="about" handleClick={() => goToAbout()} id="about_space"/> 
            <ContentSpace color={colorSet[1]}>
                <StarfieldAnimation/>
            </ContentSpace>
            <ContentSpace color={colorSet[2]}/>
            <TabSpace color={colorSet[3]} pagename="projects" handleClick={() => goToProjects()}/>
            <ContentSpace color={colorSet[4]}/>
            <ContentSpace color={colorSet[5]}/>
            <TabSpace color={colorSet[6]} pagename="art" handleClick={() => goToArt()}/>
            <ContentSpace color={colorSet[7]}/>
            <ContentSpace color={colorSet[8]}>
                <ColorCircles/>
            </ContentSpace>
            <TabSpace color={colorSet[9]} pagename="writing" handleClick={() => goToWriting()}/>
            <ContentSpace color={colorSet[10]}/>
            <ContentSpace color={colorSet[11]}/>
            <TabSpace color={colorSet[12]} pagename="music" handleClick={() => goToMusic()}/>
            <ContentSpace color={colorSet[13]}>
                <MagmaAnimation/>
            </ContentSpace>
            <ContentSpace color={colorSet[14]}/>
        </div>
    )
}
  

export default RightPanel