import React from 'react'
import PageSpace from './page_space.js'
import ContentSpace from './content_space.js'
import MagmaAnimation from "./animations/animation1.js";
import ColorCircles from "./animations/animation2.js";

var colorSet = ["bg-orange-700", "bg-lime-300" , "bg-yellow-700", "bg-indigo-800", "bg-fuchsia-500", 
                "bg-pink-600", "bg-cyan-300", "bg-amber-200" , "bg-emerald-500",
                "bg-violet-600", "bg-pink-100", "bg-lime-900", "bg-emerald-100", "bg-sky-600"]

colorSet = colorSet.sort(() => Math.random() - 0.5);

const RightPanel = ({onAboutClick , onProjectsClick, onArtClick, onWritingClick, onMusicClick}) => {
  
    return (
        <div className="float-right flex flex-wrap h-screen w-5/12" id="rightpanel">
            <PageSpace color={colorSet[0]} pagename="about" handleClick={onAboutClick} id="about_space"/> 
            <ContentSpace color={colorSet[1]}/>
            <ContentSpace color={colorSet[2]}/>
            <PageSpace color={colorSet[3]} pagename="projects" handleClick={onProjectsClick}/>
            <ContentSpace color={colorSet[4]}/>
            <ContentSpace color={colorSet[5]}/>
            <PageSpace color={colorSet[6]} pagename="art" handleClick={onArtClick}/>
            <ContentSpace color={colorSet[7]}/>
            <ContentSpace color={colorSet[8]}>
                <ColorCircles/>
            </ContentSpace>
            <PageSpace color={colorSet[9]} pagename="writing" handleClick={onWritingClick}/>
            <ContentSpace color={colorSet[10]}/>
            <ContentSpace color={colorSet[11]}/>
            <PageSpace color={colorSet[0]} pagename="music" handleClick={onMusicClick}/>
            <ContentSpace color={colorSet[1]}>
                <MagmaAnimation/>
            </ContentSpace>
            <ContentSpace color={colorSet[2]}/>
        </div>
    )
}
  

export default RightPanel