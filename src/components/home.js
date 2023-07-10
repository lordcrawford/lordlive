import React, { useState } from 'react';
import LeftPanel from "./home_lhalf";
import RightPanel from "./home_rhalf";
import './home.css';


const Home = () => {

    const [isAboutClicked, setIsAboutClicked] = useState(false);
    const [isProjectsClicked, setIsProjectsClicked] = useState(false);
    const [isArtClicked, setIsArtClicked] = useState(false);
    const [isMusicClicked, setIsMusicClicked] = useState(false);
    const [isWritingClicked, setIsWritingClicked] = useState(false);

    const handleAboutClick = () => {
        setIsAboutClicked(true);
        setIsProjectsClicked(false);
        setIsMusicClicked(false);
        setIsWritingClicked(false);
        setIsArtClicked(false);
    };

    const handleProjectsClick = () => {
        setIsProjectsClicked(true);
        setIsAboutClicked(false);
        setIsMusicClicked(false);
        setIsWritingClicked(false);
        setIsArtClicked(false);
    };

    const handleArtClick = () => {
        setIsArtClicked(true);
        setIsProjectsClicked(false);
        setIsMusicClicked(false);
        setIsWritingClicked(false);
        setIsAboutClicked(false);
    };

    const handleMusicClick = () => {
        setIsMusicClicked(true);
        setIsProjectsClicked(false);
        setIsAboutClicked(false);
        setIsWritingClicked(false);
        setIsArtClicked(false);
    };

    const handleWritingClick = () => {
        setIsWritingClicked(true);
        setIsProjectsClicked(false);
        setIsMusicClicked(false);
        setIsAboutClicked(false);
        setIsArtClicked(false);
    };

    return (
        <div id="home">
            <LeftPanel isAboutClicked={isAboutClicked} isProjectsClicked={isProjectsClicked} 
                isArtClicked={isArtClicked} isWritingClicked={isWritingClicked} isMusicClicked={isMusicClicked}/>
            <RightPanel onAboutClick={handleAboutClick} onProjectsClick={handleProjectsClick}
                onArtClick={handleArtClick} onMusicClick={handleMusicClick} onWritingClick={handleWritingClick}/>
        </div>
    )
}

export default Home