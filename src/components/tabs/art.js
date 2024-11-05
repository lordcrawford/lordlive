import React, { useEffect } from 'react';
import RightPanelSlim from "../righthalf/right_half_slim.js"
import { useNavigate } from "react-router-dom";

const Art = () => {

    const navigate = useNavigate()

    const goHome=()=>{
        navigate("/");
    }
    
    useEffect(() => {
        const rightPanel = document.getElementById('rightpanel_slim');
        const leftPanel = document.getElementById('leftpanel');

        const syncScroll = (event) => {
            const currentScroll = leftPanel.scrollTop;
            leftPanel.scrollTop = currentScroll + event.deltaY;
            event.preventDefault();
        };

        rightPanel.addEventListener('wheel', syncScroll);

        return () => {
            rightPanel.removeEventListener('wheel', syncScroll);
        };
    }, []);

    return (
        <div id="art">
            <div id="leftpanel_wide" className='bg-white float-left h-screen grid overflow-y-scroll justify-self-center w-2/3'>
                <div id="name" className="text-[4vw] cursor-pointer ml-[3.5%] mt-[2%] space-y-[-2vw]" onClick={() => goHome()}><div>Lord</div><div>Crawford</div></div>
                <div id="images" className="w-[80%] pt-[7%] space-y-10 space-x-5 flex flex-wrap mb-10 justify-self-center place-content-center mt-[7%] md:mt-[-1%]">
                    <img id="deepest_corner" className ="ink w-full md:w-[80%]" src={require('../photos/deepest_corner.jpeg')} alt="Deepest Corner"/>
                    <img id="alter_ego" className ="charcoal w-[90%] md:w-[65%]" src={require('../photos/alter_ego.jpeg')} alt="Alter Ego"/>
                    <img id="vortex" className ="charcoal w-full md:w-[90%]" src={require('../photos/vortex.png')} alt="Vortex"/>
                    <img id="new_world" className ="ink w-[80%] md:w-[52%]" src={require('../photos/new_world.jpeg')} alt="New World"/>
                    <img id="first" className ="graphite w-[80%] md:w-[45%]" src={require('../photos/first.jpeg')} alt="First"/>
                    <img id="second" className ="graphite w-[80%] md:w-[45%] " src={require('../photos/second.jpeg')} alt="Second" />
                </div>
            </div>
            <RightPanelSlim/>
        </div>
    )
}

export default Art