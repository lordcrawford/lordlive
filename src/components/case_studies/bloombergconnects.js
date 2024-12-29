import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import '../home.css';
import RightPanelSlim from '../righthalf/right_half_slim.js';


const BloombergConnects = () => {

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
        <div id="bloombergconnects">
            <div id="leftpanel_wide" className='bg-white float-left h-screen overflow-y-scroll overflow-hidden justify-self-center'>
                <div id="name" className="text-[4vw] cursor-pointer ml-[3.5%] mt-[2%] space-y-[-2vw]" 
                onClick={() => goHome()}><div>Lord</div><div>Crawford</div></div>
                <hr className='mt-[2vw] mx-[2vw] border-black border-[1px]'/>
                <div className=' ml-[3.5%] pb-[3vw]'>
                    <div className='flex flex-col md:flex-row justify-between mt-[2%]'>
                    <h1 id="es_title"className="underline decoration-dotted decoration-[6px] 
                    underline-offset-[13px] text-[7vw] md:text-[3.2vw] text-[#E71751] font-extrabold 
                    self-center font-opensans w-[70%]">Bloomberg Connects Revamped</h1>
                        <a href="https://www.figma.com/proto/dPi3xupiuNMxmZh3ailFgf/Lord---Bloomberg-Connects-Revamped?page-id=&type=design&node-id=377-6019&viewport=4240%2C-501%2C0.25&t=YiFkxVAuI4WyWZJh-1&scaling=scale-down&starting-point-node-id=377%3A6019&show-proto-sidebar=1" 
                        className="mt-[2vw] md:mt-0 mr-[5%] bg-[#E71751] p-[1.5%] h-min 
                        text-white self-center hover:bg-rose-700 text-center">Visit Figma Link &rarr;</a>
                    </div>
                    <div className='bg-stone-800 h-min mt-[5vw] md:mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Summary</p>
                        <p className='mt-[1vw] font-light font-urbanist text-[17px] text-stone-200'> 
                        I have always been drawn to art museums but noticed they often overwhelm 
                        casual visitors with complex layouts and insurmountable collections of information. I saw an 
                        opportunity to address this through a redesign of the <b className='font-bold text-rose-500'> Bloomberg Connects</b> museum guide app.
                        <i> [ Final Project for Pratt Institute's Digital Product Design Certificate Program ]</i></p><br/>


                        <div className="flex flex-col md:flex-row place-content-center space-y-[2vw] md:space-y-[0vw] md:space-x-[3vw]">
                            <img className="w-[95%] md:w-[25%] object-cover" src={require('../photos/bloomberg/homescreen.png')} alt="first hi-fi wireframe"/>
                            <img className="w-[95%] md:w-[25%] object-cover" src={require('../photos/bloomberg/customtour.png')} alt="first hi-fi wireframe"/>
                        </div><br/>
                        <p className='font-urbanist text-[13px]'>*I do not own Bloomberg Connects or any of the app/company. These are mocks.</p>
                    </div>

                    <div className='bg-stone-600 h-min mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Specifications</p>
                        <p className='mt-[1vw] font-light text-[17px] text-stone-200 font-urbanist'> 
                            <b><u>Date:</u></b> February 2024 - April 2024 <br/>
                            <b><u>Client(s):</u></b> Lord Crawford & Anyone (Personal Project) <br/>
                            <b><u>Tools Used:</u></b> Figma <br/>
                            <b><u>Role:</u></b> Sole Product Designer <br/> <br/>
                            <b><u>Figma:</u></b> <a href="https://www.figma.com/proto/dPi3xupiuNMxmZh3ailFgf/Lord---Bloomberg-Connects-Revamped?page-id=&type=design&node-id=377-6019&viewport=4240%2C-501%2C0.25&t=YiFkxVAuI4WyWZJh-1&scaling=scale-down&starting-point-node-id=377%3A6019&show-proto-sidebar=1" 
                            class="text-rose-400 font-bold hover:text-fuchsia-400">Visit Here</a>
                        </p>
                        
                    </div>

                    <div className='bg-stone-800 h-min mt-[5vw] md:mt-[2.5vw] p-[10px] mr-[2vw] text-white flex flex-col'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Research</p>
                        <p className='mt-[1vw] font-light text-[17px] text-stone-200 mb-[1vw] font-urbanist'> 
                            In order to fully understand the landscape of museum guide applications, I first studied the intracasies 
                            of similar products: Google Arts & Culture, The MET app, and Artsy. What I learned was that all these applications 
                            offer useful information on art, but no easy way to consume it. 
                        </p>
                        
                        <p className='self-center text-[14px] mb-[2%] text-stone-200 font-light'>Google Arts & Culture</p>
                        <img className="w-[90%] self-center md:w-[60%] ml-[1%] h-auto object-cover" src={require('../photos/bloomberg/googlearts.jpg')} alt="lo-fi wireframe"/><br/>

                    </div>

                    <div className='bg-stone-600 h-min mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>User Insights</p>
                        <p className='mt-[1vw] font-light text-[17px] text-stone-200 font-urbanist'> 
                            I then interviewed 5 museum-goers in my network and discovered the following insights:
                            <br/>
                            <ul className="mx-[2%] my-[2%] space-y-[6px] list-decimal list-inside">
                                <li>In terms of directions, most people find museums easy to navigate as long as it 
                                    follows certain guidelines (i.e. spaced out, chronological order)</li>
                                <li>People find museums overwhelming due to their size, incoherent placement of art, 
                                    dense language used, and limited hours open to actually complete the visit. These 
                                    people tend to be more casual museum-goers.</li>
                                <li>Historically, most people haven’t used technology during a museum visit. 
                                    Almost everyone uses it to buy tickets and some to take pictures, however,
                                     none of my interview participants use apps to assist their museum journey. 
                                     They were not opposed to it though.</li>
                            </ul>
                        </p>
                        
                    </div>

                    <div className='bg-stone-800 h-min mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Problem Statement</p>
                        <p className='mt-[1vw] font-light text-[17px] text-stone-200 font-urbanist'> 
                            After better understanding my users' needs from interviews, 
                            I refined the problem statement:
                            <br/>
                            <p className='pl-[3%] mt-[10px] italic underline font-medium'>How might we improve museum journeys for casual art museum-goers so they 
                            can consume art in a more accessible, digestible manner?</p>
                        </p>
                        
                    </div>

                    <div className='bg-stone-600 h-min mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Wireframes</p>
                        <p className='mt-[1vw] font-light text-[17px] text-stone-200 font-urbanist'> 

                            My next step was identifying the core user flows and tasks I wanted to improve.
                            I identified the following four and redesigned them using the MoMA as an example:

                            <ul className="mx-[2%] my-[2%] space-y-[6px] list-decimal list-inside">
                                <li>You have just arrived at the museum (MoMA) and need help understanding
                                    your plan for experiencing the museum.
                                </li>
                                <li>You've started a guided tour and need to follow it 
                                    while understanding the exhibits, information, and directions.
                                </li>
                                <li>You want to tailor your museum journey around your interests in a seamless manner.
                                </li>
                                <li>You've found a particular exhibit or art piece and want to learn more about it.</li>
                            </ul><br/>
                            
                            <div className="flex flex-col font-urbanist">
                                <img className="w-[80%] self-center mb-[5vw] md:mb-[2vw] h-auto object-cover" src={require('../photos/bloomberg/wireframes1bloomberg.jpg')} alt="first lo-fi wireframe"/>
                                <img className="w-[80%] self-center mb-[5vw] md:mb-[2vw] h-auto object-cover" src={require('../photos/bloomberg/wireframes1.2bloomberg.jpg')} alt="first lo-fi wireframe"/>
                                <p>After collecting feedback from other designers and expanding on the detail in the 
                                initial mocks, I created higher fidelity wireframes so that I could put it front
                                of users.</p><br/>
                                <img className="w-[80%] self-center mb-[5vw] md:mb-[2vw] h-auto object-cover" src={require('../photos/bloomberg/hifi1bloomberg.jpg')} alt="first lo-fi wireframe"/>
                                <img className="w-[80%] self-center mb-[5vw] md:mb-[2vw] h-auto object-cover" src={require('../photos/bloomberg/hifi2bloomberg.jpg')} alt="first lo-fi wireframe"/>
                            </div>
                        </p>
                    </div>

                    <div className='bg-stone-800 h-min mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>User Testing</p>
                            <p className='mt-[1vw] font-light text-[17px] text-stone-200 font-urbanist'> 
                                Using the hi-fi designs, I tested a redesigned Bloomberg Connects App on five users
                                and gained the following insights:
                                <br/>
                                <ul className="mx-[2%] my-[2%] space-y-[6px] list-decimal list-inside">
                                    <li>It is generally clear how to navigate throughout the application 
                                        (most tasks were able to be completed with little to no guidance)</li>
                                    <li>Navigating to an exhibit’s physical location (outside of app) was unclear 
                                        to all participants</li>
                                    <li>There are several features that would increase the usefulness of this app — 
                                        more tour/artwork suggestions, planning a tour ahead, sharing a tour with a friend, 
                                        ease in going back and forth between exhibits, etc. </li>
                                    <li>Numerous CTA (Click-To-Action) areas did not appear to be clickable</li>
                                    <li>Selections in ‘Customize Tour’ segment do not seem optional</li>
                                    <li>Playing audio throughout exhibits did not feel seamless</li>
                                </ul>
                            </p>
                    </div>

                    <div className='bg-stone-600 h-min mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Final Designs</p>
                            <p className='mt-[1vw] font-light text-[17px] text-stone-200 font-urbanist'> 
                                Taking into account the previous insights from user testing, I implemented
                                changes to wireframes and created a final redesign of Bloomberg Connects.
                                <br/><br/>
                                <div className="flex flex-col md:flex-row place-content-center space-y-[2vw] md:space-y-[0vw] md:space-x-[2vw]">
                                    <img className="w-[95%] md:w-[25%] object-cover" src={require('../photos/bloomberg/homescreen.png')} alt="first hi-fi wireframe"/>
                                    <img className="w-[95%] md:w-[25%] object-cover" src={require('../photos/bloomberg/customtour.png')} alt="first hi-fi wireframe"/>
                                    <img className="w-[95%] md:w-[25%] object-cover" src={require('../photos/bloomberg/tourselected.png')} alt="first hi-fi wireframe"/>
                                </div><br/>
                                <div className="flex flex-col md:flex-row place-content-center space-y-[2vw] md:space-y-[0vw] md:space-x-[2vw]">
                                    <img className="w-[95%] md:w-[25%] object-cover" src={require('../photos/bloomberg/firstexhibit.png')} alt="first hi-fi wireframe"/>
                                    <img className="w-[95%] md:w-[25%] object-cover" src={require('../photos/bloomberg/firstexhibitclickedinto.png')} alt="first hi-fi wireframe"/>
                                    <img className="w-[95%] md:w-[25%] object-cover" src={require('../photos/bloomberg/nowplaying.png')} alt="first hi-fi wireframe"/>
                                </div>
                                
                            </p>
                    </div>

                    <div className='bg-stone-800 border-black h-min mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Style Guide</p>
                        <p className='mt-[4vw] md:mt-[2vw] font-light text-[16px] text-stone-200'> 

                            <b className="text-[14pt]"><u>Color</u></b> <br/><br/>

                            <div className="flex flex-row mb-[8vw] md:mb-[3vw] space-x-[1vw]">
                                <div className="w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw] bg-[#E71751]"></div>
                                <div className="w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw] bg-[#AD103C]"></div>
                                <div className="w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw] bg-[#27CB23]"></div>
                                <div className="w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw] bg-[#F7F4F4]"></div>
                                <div className="w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw] bg-white border-black border-[1px]"></div>
                                <div className="w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw] bg-[#302F2F]"></div>
                                <div className="w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw] bg-black border-white border-[1px]"></div>
                            </div>

                            <b className="text-[14pt]"><u>Typography</u></b> <br/><br/>

                            <div className='flex flex-col md:flex-row'>
                                <p className='helvetica text-[21pt]'>Helvetica Neue</p>
                            </div>

                        </p>
                        
                    </div>
                </div>
            </div>
            <RightPanelSlim/>
        </div>
    )
}

export default BloombergConnects