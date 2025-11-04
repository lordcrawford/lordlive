import React, { useEffect } from 'react';
import './projects.css';
import { useNavigate } from "react-router-dom";
import RightPanelSlim from '../righthalf/right_half_slim.js';

const Projects = () => {

    function goToLink(link) {
        window.location.href = link;
    }

    const navigate = useNavigate()

    const goHome=()=>{
        navigate("/");
    }

    const goToEverydaySounds=()=>{
        navigate("/everydaysounds");
    }

    const goToVRCooking=()=>{
        navigate("/vrcooking");
    }

    const goToBloombergConnects=()=>{
        navigate("/bloombergconnects");
    }

    const goToAdsNYTGames=()=>{
        navigate("/adsnytgames");
    }

    useEffect(() => {
        const rightPanel = document.getElementById('rightpanel_slim');
        const leftPanel = document.getElementById('leftpanel_wide');

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
        <div id="projects">
            <div id="leftpanel_wide" className='bg-white float-left h-screen grid overflow-y-scroll justify-self-center w-2/3'>
                <div id="name" className="text-[4vw] cursor-pointer ml-[3.5%] mt-[2%] space-y-[-2vw]" onClick={() => goHome()}><div>Lord</div><div>Crawford</div></div>
                <div id="all_project_list" className="mt-[5%] space-y-4 mb-10  w-[90%] h-full justify-self-center">
                    <div className="project cursor-pointer flex flex-row h-[7.1rem] border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-blue-200"
                    onClick={(e) => goToAdsNYTGames()}>
                        <img id='pin' className="absolute h-[25px] left-1 top-0" src={require('../photos/pin.png')} alt="pin"></img>
                        <div className="title self-center w-2/5 pr-2 font-[350]">NYT Games - Ad Experience</div>
                        <div className="description self-center w-3/5 pl-3 font-[400] font-urbanist" > Led a team of 12 to build the advertising experience
                        for NYT Games</div>
                        <p className='absolute bottom-0 pr-2 text-[15px] font-urbanist italic '>2023-5</p>
                        <p className='absolute bottom-0 right-0 text-[12px] italic italic text-red-400 font-urbanist '>View case study</p>
                    </div>
                    
                    <div className="cursor-pointer project flex flex-row h-[7.1rem] border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-teal-200" onClick={(e) => goToEverydaySounds()}>
                        <img id='pin' className="absolute h-[25px] left-1 top-0" src={require('../photos/pin.png')} alt="pin"></img>
                        <div className="title self-center w-2/5 pr-2 font-[350] ">Everyday Sounds</div>
                        <div className="description self-center w-3/5 pl-3 font-[400] font-urbanist">Web-based beat maker, programmed using React</div>
                        <p className='absolute bottom-0 pr-2 text-[15px] font-urbanist italic'>2024</p>
                        <p className='absolute bottom-0 right-0 text-[12px] italic text-red-500 font-urbanist '>View case study</p>
                    </div>

                    <div className="project cursor-pointer flex flex-row h-[7.1rem] border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-yellow-200"
                    onClick={(e) => goToVRCooking()}>
                        <img id='pin' className="absolute h-[25px] left-1 top-0" src={require('../photos/pin.png')} alt="pin"></img>
                        <div className="title self-center w-2/5 pr-2 font-[350]">VR Cooking Simulator</div>
                        <div className="description self-center w-3/5 pl-3 pr-4 font-[400] font-urbanist">Virtual reality kitchen environment that teaches players how to make pancakes. Utilized C# and Unity 3D. 
                        </div>
                        <p className='absolute bottom-0 pr-2 text-[15px] font-urbanist italic '>2022</p>
                        <p className='absolute bottom-0 right-0 text-[12px] italic italic text-red-400 font-urbanist '>View case study</p>
                    </div>

                    <div className="project cursor-pointer flex flex-row h-[7.1rem] border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-sky-200"
                    onClick={(e) => goToLink('https://arxiv.org/abs/2412.10709')}>
                        <img id='pin' className="absolute h-[25px] left-1 top-0" src={require('../photos/pin.png')} alt="pin"></img>
                        <div className="title self-center w-2/5 pr-2 font-[350]">A Post a Day Keeps the Doctor Away</div>
                        <div className="description self-center w-3/5 pl-3 font-[400] font-urbanist"> Co-authored a Human-Computer Interaction research paper analyzing 
                             people’s willingness to share personal info on online self-diagnosis platforms. <i className="underline">arXiv:2412.10709</i></div>
                        <p className='absolute bottom-0 pr-2 text-[15px] font-urbanist italic'>2021</p>
                        <p className='absolute bottom-0 right-0 text-[12px] italic italic text-red-400 font-urbanist '>View paper</p>
                    </div>

                    <div className="project cursor-pointer flex flex-row h-[7.1rem] border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-red-200"
                    onClick={(e) => goToBloombergConnects()}>
                        <div className="title self-center w-2/5 pr-2 font-[350]">Bloomberg Connects Revamped</div>
                        <div className="description self-center w-3/5 pl-3 font-[400] font-urbanist"> Full redesign of the museum guide app - Bloomberg Connects. </div>
                        <p className='absolute bottom-0 pr-2 text-[15px] font-urbanist italic '>2024</p>
                        <p className='absolute bottom-0 right-0 text-[12px] italic italic text-red-400 font-urbanist '>View case study</p>
                    </div>

                    <div className="project cursor-pointer flex flex-row h-[7.1rem] border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-red-200"
                    onClick={(e) => goToLink('https://cooking.nytimes.com/')}>
                        <div className="title self-center w-2/5 pr-2 font-[350]">NYT Cooking  - Ad Experience</div>
                        <div className="description self-center w-3/5 pl-3 font-[400] font-urbanist"> Led the expansion of NYT Cooking's ad coverage (App & Web) and built it into a monetizable digital product.</div>
                        <p className='absolute bottom-0 pr-2 text-[15px] font-urbanist italic'>2023-4</p>
                        <p className='absolute bottom-0 right-0 text-[12px] italic italic text-red-400 font-urbanist '>View website</p>
                    </div>
                    
                    <div className="project cursor-pointer flex flex-row h-[7.1rem] border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-indigo-200"
                    onClick={(e) => goToLink('https://open.nytimes.com/a-week-in-the-life-of-a-team-during-the-new-york-times-annual-hackathon-91b793dc51ab')}>
                        <div className="title self-center w-2/5 pr-2 font-[350]">NYT - VisionReader</div>
                        <div className="description self-center w-3/5 pl-3 font-[400] font-urbanist"> Immersive 
                        reading experience for New York Times articles on Apple Vision Pro (VR/AR). Product lead for NYT Maker Week 2023 group project.</div>
                        <p className='absolute bottom-0 pr-2 text-[15px] font-urbanist italic'>2023</p>
                        <p className='absolute bottom-0 right-0 text-[12px] italic italic text-red-400 font-urbanist '>View NYT article</p>
                    </div>

                    <div className="project cursor-pointer flex flex-row h-[7.1rem] border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-orange-200"
                    onClick={(e) => goToLink('https://business.twitter.com/en/help/campaign-setup/campaign-targeting/custom-audiences.html')}>
                        <div className="title self-center w-2/5 pr-2 font-[350]">Twitter Ads Audience Sharing</div>
                        <div className="description self-center w-3/5 pl-3 font-[400] font-urbanist"> Allows 
                        Twitter advertisers to share audiences amongst each other and more effectively reach their audiences.
                        <i> [Twitter PM Internship Project]</i> 
                        </div>
                        <p className='absolute bottom-0 pr-2 text-[15px] font-urbanist italic'>2021</p>
                        <p className='absolute bottom-0 right-0 text-[12px] italic italic text-red-400 font-urbanist '>View documentation</p>
                    </div>

                    <div className="project flex flex-row h-[7.1rem] border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-teal-200">
                        <div className="title self-center w-2/5 pr-2 font-[350]">YouTube Live - Livestream Highlights</div>
                        <div className="description self-center w-3/5 pl-3 font-[400] font-urbanist">Identifies 
                        high-engagement areas in a user's YouTube livestream and helps them make a shorter highlight video. [Google SWE Internship Project]</div>
                        <p className='absolute bottom-0 pr-2 text-[15px] font-urbanist italic'>2020</p>
                    </div>

                    <div className="project flex flex-row h-[7.1rem] border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-yellow-200">
                        <div className="title self-center w-2/5 pr-2 font-[350]">Google Chrome - Search Suggestions</div>
                        <div className="description self-center w-3/5 pl-3 font-[400] font-urbanist"> Dynamic search suggestions 
                        on Google Chrome’s homepage via interactive chip tiles. [Google SWE Internship Project]</div>
                        <p className='absolute bottom-0 pr-2 text-[15px] font-urbanist italic'>2019</p>
                    </div>

                    <div className="project flex flex-row h-[7.1rem] border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-pink-200 cursor-pointer"
                    onClick={(e) => goToLink('https://github.com/thecolumbialion/lionbot')}>
                        <div className="title self-center w-2/5 pr-2 font-[350]">LionBot</div>
                        <div className="description self-center w-3/5 pl-3 font-[400] font-urbanist"> Facebook Messenger chatbot 
                        that answers questions about Columbia University life. 
                        <i> Served as a developer on a four-person team.</i></div>
                        <p className='absolute bottom-0 pr-2 text-[15px] font-urbanist italic'>2019</p>
                        <p className='absolute bottom-0 right-0 text-[12px] italic italic text-red-400 font-urbanist '>View repository</p>
                    </div>

                    <div className="project cursor-pointer flex flex-row h-[7.1rem] border-b-2 border-l-2 pl-4 border-black 
                    transition transform hover:skew-y-1 hover:border-l-8 hover:bg-stone-200" onClick={() => goHome()}>
                        <div className="title self-center w-2/5 pr-2 font-[350]">lord.live</div>
                        <div className="description self-center w-3/5 pl-3 font-[400] font-urbanist">Programmed this portfolio website using React</div>
                    </div>
                    
                </div>
            </div>
            <RightPanelSlim />
        </div>
    )
}

export default Projects