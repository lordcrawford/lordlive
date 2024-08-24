import React, { useEffect } from 'react';
import RightPanel from "../righthalf/right_half.js";
import { useNavigate } from "react-router-dom";

const Writing = () => {

    const navigate = useNavigate()

    const goHome=()=>{
        navigate("/");
    }

    useEffect(() => {
        const rightPanel = document.getElementById('rightpanel');
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
        <div id="writing">
            <div id="leftpanel" className='bg-white float-left h-screen overflow-y-scroll overflow-hidden justify-self-center'>
                <div id="name" className="text-[4vw] cursor-pointer ml-[3.5%] mt-[2%] space-y-[-2vw]" onClick={() => goHome()}><div>Lord</div><div>Crawford</div></div>
                <h1 className="text-[5vw] md:text-[2vw] mt-[10%] ml-[3.5%] font-light">Coming Soon ✍🏾</h1>
            </div>
            <RightPanel/>
        </div>
    )
}

export default Writing