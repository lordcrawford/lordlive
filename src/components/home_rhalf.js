import React from 'react'
import PageSpace from './page_space.js'
import ContentSpace from './content_space.js'
import PsychedelicAnimation from "./animations/animation1.js";
import ColorCircles from "./animations/animation2.js";

import { useNavigate } from "react-router-dom";

var colorSet = ["bg-orange-700", "bg-lime-300" , "bg-yellow-700", "bg-indigo-800", "bg-fuchsia-500", 
                "bg-pink-600", "bg-cyan-300", "bg-amber-200" , "bg-emerald-500",
                "bg-violet-600", "bg-pink-100", "bg-lime-900", "bg-emerald-100", "bg-sky-600"]

colorSet = colorSet.sort(() => Math.random() - 0.5);

const RightPanel = () => {
    const navigate = useNavigate(); 
  
    return (
        <div className="bg-black float-right flex flex-wrap h-screen w-5/12" id="rightpanel">
            <PageSpace color={colorSet[0]} pagename="about" handleClick={() => navigate('about')}/> 
            <ContentSpace color={colorSet[1]}/>
            <ContentSpace color={colorSet[2]}>
            </ContentSpace>
            <PageSpace color={colorSet[3]} pagename="projects" handleClick={() => navigate('projects')}/>
            <ContentSpace color={colorSet[4]}/>
            <ContentSpace color={colorSet[5]}/>
            <PageSpace color={colorSet[6]} pagename="art" handleClick={() => navigate('art')}/>
            <ContentSpace color={colorSet[7]}/>
            <ContentSpace color={colorSet[8]}>
                <ColorCircles/>
            </ContentSpace>
            <PageSpace color={colorSet[9]} pagename="writing" handleClick={() => navigate('writing')}/>
            <ContentSpace color={colorSet[10]}/>
            <ContentSpace color={colorSet[11]}/>
            <PageSpace color={colorSet[0]} pagename="music" handleClick={() => navigate('writing')}/>
            <ContentSpace color={colorSet[1]}>
                <PsychedelicAnimation/>
            </ContentSpace>
            <ContentSpace color={colorSet[2]}/>
        </div>
    )
}
  


  
export default RightPanel