import React from 'react'
import LeftPanel from "./home_lhalf";
import RightPanel from "./home_rhalf";
import './home.css';


const Home = () => {

    return (
        <div id="home">
            <LeftPanel/>
            <RightPanel/>
        </div>
    )
}

export default Home