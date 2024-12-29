import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import '../home.css';
import RightPanelSlim from '../righthalf/right_half_slim.js';


const AdsNYTGames = () => {

    const navigate = useNavigate()

    const goHome=()=>{
        navigate("/");
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
        <div id="adsnytgames">
            <div id="leftpanel_wide" className='bg-white float-left h-screen overflow-y-scroll overflow-hidden justify-self-center'>
                <div id="name" className="text-[4vw] cursor-pointer ml-[3.5%] mt-[2%] space-y-[-2vw]" 
                onClick={() => goHome()}><div>Lord</div><div>Crawford</div></div>
                <hr className='mt-[2vw] mx-[2vw] border-black border-[1px]'/>
                <div className=' ml-[3.5%] pb-[3vw]'>
                    <div className='flex flex-col md:flex-row justify-between mt-[2%]'>
                    <h1 id="es_title"className=" decoration-[6px] 
                    underline-offset-[13px] text-[9vw] md:text-[3vw] text-black font-extrabold 
                    self-center font-georgia w-[70%]">NYT Games - <i className='font-urbanist font-normal'>Ad Experience</i></h1>
                        <a href="https://www.nytimes.com/crosswords" 
                        className="mt-[2vw] md:mt-0 mr-[5%] bg-[#5B87F1] p-[1.5%] h-min 
                        text-white self-center hover:bg-rose-700 text-center">Visit NYT Games &rarr;</a>
                    </div>
                    <div className='bg-stone-800 h-min mt-[5vw] md:mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Summary</p>
                        <p className='mt-[1vw] font-light font-urbanist text-[17px] text-stone-200'> Since April 2023, 
                            I have led the strategy and execution of the advertising experience for New York Times Games, 
                            managing a 10-person team to design and build end-to-end ad integrations across web, iOS, and 
                            Android devices. This includes launching ad experiences in popular word games like Connections, 
                            Spelling Bee, and more. <br/><br/>
                            
                            The overarching goal is <b className='text-yellow-600 font-bold'>establishing advertising in NYT Games
                            to drive revenue without compromising the player experience</b>. 
                            I work to create ad experiences that feel premium and effectively broadcast an advertiser's message.
                        </p><br/>
                        <div className="flex flex-col">
                            <p className='self-center text-[16px] mt-[30px] font-urbanist text-stone-200 font-light'>Connections Mobile Interstitial Ad Experience</p>
                            <img className="w-[95%] md:w-[80%] self-center  mb-[3vw] md:mb-[1vw] h-auto object-cover" src={require('../photos/nyt/connections1.png')} alt="connections mobile ad experience"/>

                            <p className='self-center text-[16px] mt-[10px] font-urbanist text-stone-200 font-light'>Connections Desktop Ad Experience</p>
                            <img className="w-[95%] md:w-[80%] self-center mt-[3vw] md:mt-[1.5vw] mb-[3vw] md:mb-[1vw] h-auto object-cover" src={require('../photos/nyt/connections_gif.gif')} alt="connections desktop ad experience"/>
                        </div>
                    </div>

                    <div className='bg-stone-600 h-min mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Specifications</p>
                        <p className='mt-[1vw] font-light text-[17px] text-stone-200 font-urbanist'> 
                            <b><u>Date:</u></b> April 2023 - Present <br/>
                            <b><u>Client(s):</u></b> NYT Advertisers, NYT Games users <br/>
                            <b><u>Tools Used:</u></b> Figma, Javascript, HTML/CSS, Swift, JIRA, Mode Analytics, Tableau, Google Ad Manager (GAM) <br/>
                            <b><u>Role:</u></b> Product Manager<br/><br/>
                            <b><u>Contributions:</u></b>
                            <ul className='list-[square] list-outside pl-6'>
                                <li>Identified new business opportunities to maximize ad revenue, improve ad efficiency, and mitigate impact to user engagement.</li>
                                <li>Authored product requirement documents which detailed designs, product features, 
                                risks, strategy, timelines, and key performance metrics.</li>
                                <li>Led high-impact stakeholder meetings, strategic presentations, and collaborative 
                                    brainstorming sessions to shape the vision and direction of ad experiences.</li>
                                <li>Provided feedback and alteration on designs to improve engagement and usability</li>
                                <li>Designed, executed, and analyzed multiple experiments to inform critical product decisions</li>
                                <li>Partnered with engineers to resolve bugs and develop innovative solutions to technical challenges.</li>
                            </ul> <br/>
                        </p>
                        
                    </div>

                    <div className='bg-stone-800 h-min mt-[5vw] md:mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Launches</p>
                        <p className='mt-[1vw] font-light text-[17px] text-stone-200 font-urbanist'> 
                            <ul className='list-[square] list-outside pl-6'>
                                <li><b className='font-bold text-yellow-600'>Ad Experience on Wordle (Mobile)</b> - Introduced 
                                a full-screen interstitial ad experience (pictured above) on the Wordle mobile web
                                game, appearing in between the game welcome screen and the gameboard. This entailed several design critiques,
                                experimentation, and rigorous web development.</li>
                                <li><b className='font-bold text-yellow-600'>Ad Experience on Connections, Strands, 
                                    Spelling Bee, and Mini Crossword</b> - Taking learnings from the original Wordle launch,
                                    we monetized new and existing games with a mirrored interstitial ad experience. There are differences
                                    in how each game is built which introduced complexity and varying designs.</li>
                                    <li><b className='font-bold text-yellow-600'>First-Party (1P) Targeting on NYT Games Ads</b> - 
                                Uses data collected about users to better target advertisements on all NYT Games surfaces</li>
                                <li><b className='font-bold text-yellow-600'>5-Second Hold on Video Ads (Mobile)</b> - 
                                Introduced an optimization that ensures higher engagement on video advertisements,
                                 on par with industry standards.</li>
                                <li><b className='font-bold text-yellow-600'>Ad Experience on NYT Games Home Page</b> - 
                                Implemented ad frames in a central hub for NYT games users.</li>
                                <li><b className='font-bold text-yellow-600'>Ad Experience on New York Times App 'Play Tab'</b> - 
                                Implemented ad frames in a central hub for NYT games users.</li>
                                
                            </ul> <br/>
                        </p>
                        
                    </div>

                    <div className='bg-stone-600 h-min mt-[5vw] md:mt-[2.5vw] p-[10px] mr-[2vw] text-white flex flex-col'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Press Releases</p>
                        <p className='mt-[1vw] font-light text-[17px] text-stone-200 font-urbanist'> 
                            <ul className='list-[square] list-outside pl-6'>
                                <li className='mt-[5px]'><a href="https://www.marketingdive.com/news/new-york-times-wordle-new-mobile-ad-format-doordash/685073/" 
                                class="text-blue-300 italic underline font-bold hover:text-fuchsia-400">NYT’s Wordle 
                                debuts new mobile ad format with DoorDash </a> - Marketing Dive | July 6, 2023</li>
                                <li><a href="https://www.adforum.com/news/new-york-times-advertising-launches-ads-in-connections-with-launch-sponsors-uber-eats-capital-one-and-oura" 
                                class="text-blue-300 italic underline font-bold hover:text-fuchsia-400">New York Times Advertising Launches Ads in 
                                Connections with Launch Sponsors Uber Eats, Capital One and ŌURA
                                </a> - AdForum | December 6, 2023</li>
                                <li><a href="https://www.adweek.com/media/new-york-times-games-advertising/" 
                                class="text-blue-300 italic underline font-bold hover:text-fuchsia-400">The New York 
                                Times Games Advertising Is More Than an Awareness Machine
                                </a> - Adweek | February 6, 2024</li>
                                <li><a href="https://www.adexchanger.com/publishers/nyts-ad-and-subscription-revenue-surge-as-wapo-flails/" 
                                class="text-blue-300 italic underline font-bold hover:text-fuchsia-400">NYT’s Ad And Subscription 
                                Revenue Surge As WaPo Flails</a> - AdExchanger | November 4, 2024</li>
                            </ul> <br/>
                        </p>

                    </div>
                </div>
            </div>
            <RightPanelSlim/>
        </div>
    )
}

export default AdsNYTGames