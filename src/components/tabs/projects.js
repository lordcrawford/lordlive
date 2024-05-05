import React from 'react'
import './projects.css';
import RightPanel from "../righthalf/right_half.js";
import { useNavigate } from "react-router-dom";

const Projects = () => {

    function goToLink(link) {
        window.location.href = link;
    }

    const navigate = useNavigate()

    const goHome=()=>{
        navigate("/");
    }


    return (
        <div id="projects">
            <div id="leftpanel" className='bg-white float-left h-screen grid overflow-y-scroll justify-self-center'>
                <div id="name" className="text-[4vw] cursor-pointer ml-[3.5%] mt-[2%] space-y-[-2vw]" onClick={() => goHome()}><div>Lord</div><div>Crawford</div></div>
                <div id="all_project_list" className="mt-[7%] space-y-4 mb-10  w-[90%] h-full justify-self-center">
                    <div className="pulse-border project flex flex-row h-24 border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-indigo-300">
                        <div className="title self-center w-2/5 pr-2">Everyday Sounds</div>
                        <div className="description self-center w-3/5 pl-3 font-[400]">[Work In Progress] Web-based beat maker</div>
                    </div>
                    <div className="project cursor-pointer flex flex-row h-24 border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-sky-300" onClick={() => goHome()}>
                        <div className="title self-center w-2/5 pr-2">lord.live</div>
                        <div className="description self-center w-3/5 pl-3 font-[400]">Programmed this website from scratch using React</div>
                    </div>

                    <div className="project cursor-pointer flex flex-row h-24 border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-purple-100"
                    onClick={(e) => goToLink('https://www.adforum.com/news/new-york-times-advertising-launches-ads-in-connections-with-launch-sponsors-uber-eats-capital-one-and-oura')}>
                        <div className="title self-center w-2/5 pr-2">Connections Mobile Ad</div>
                        <div className="description self-center w-3/5 pl-3 font-[400]"> Led the launch of a full-screen interstitial
                        advertisement on The New York Times' Connections mobile web game (Sponsors: Dior, Oura, Capital One, & Uber Eats)</div>
                    </div>

                    <div className="project cursor-pointer flex flex-row h-24 border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-purple-100"
                    onClick={(e) => goToLink('https://www.marketingdive.com/news/new-york-times-wordle-new-mobile-ad-format-doordash/685073/')}>
                        <div className="title self-center w-2/5 pr-2">Wordle Mobile Ad</div>
                        <div className="description self-center w-3/5 pl-3 font-[400]"> Supported the launch of a full-screen interstitial
                        advertisement on The New York Times' Wordle mobile web game (Sponsor: DoorDash)</div>
                    </div>

                    <div className="project cursor-pointer flex flex-row h-24 border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-red-300"
                    onClick={(e) => goToLink('https://youtu.be/qeGczrRkh34')}>
                        <div className="title self-center w-2/5 pr-2">VR Cooking Simulator</div>
                        <div className="description self-center w-3/5 pl-3 pr-4 font-[400]">Virtual kitchen environment that teaches players how to make pancakes</div>
                    </div>

                    <div className="project cursor-pointer flex flex-row h-24 border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-orange-100"
                    onClick={(e) => goToLink('https://business.twitter.com/en/help/campaign-setup/campaign-targeting/custom-audiences.html')}>
                        <div className="title self-center w-2/5 pr-2">Audience Sharing</div>
                        <div className="description self-center w-3/5 pl-3 font-[400]"> Twitter Ads feature that allows 
                        advertisers to share audiences amongst each other and more effectively reach their audiences</div>
                    </div>

                    <div className="project flex flex-row h-24 border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-yellow-100">
                        <div className="title self-center w-2/5 pr-2">A Post a Day Keeps the Doctor Away</div>
                        <div className="description self-center w-3/5 pl-3 font-[400]"> Human-Computer Interaction paper analyzing the factors 
                            affecting people’s willingness to share personal info on online self-diagnosis platforms</div>
                    </div>
                    
                </div>
            </div>
            <RightPanel/>
        </div>
    )
}

export default Projects