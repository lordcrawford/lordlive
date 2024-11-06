import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import '../home.css';
import RightPanelSlim from '../righthalf/right_half_slim.js';


const EverydaySounds = () => {

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
        <div id="everydaysounds">
            <div id="leftpanel_wide" className='bg-white float-left h-screen overflow-y-scroll overflow-hidden justify-self-center'>
                <div id="name" className="text-[4vw] cursor-pointer ml-[3.5%] mt-[2%] space-y-[-2vw]" onClick={() => goHome()}><div>Lord</div><div>Crawford</div></div>
                <hr className='mt-[2vw] mx-[2vw] border-black border-[1px]'/>
                <div className=' ml-[3.5%] pb-[3vw]'>
                    <div className='flex flex-col md:flex-row justify-between mt-[2%]'>
                        <h1 id="es_title"className="text-[9vw] md:text-[3.7vw] text-cyan-400 font-limelight font-extralight self-center">EVERYDAY SOUNDS</h1>
                        <a href="https://www.everydaysounds.live" className="mt-[2vw] md:mt-0 mr-[5%] bg-cyan-400 p-[1.5%] h-min 
                        text-white self-center hover:bg-cyan-500 text-center">Visit Live Project &rarr;</a>
                    </div>
                    <div className='bg-stone-800 h-min mt-[5vw] md:mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-limelight font-normal'>SUMMARY</p>
                        <p className='mt-[1vw] font-light text-[16px] text-stone-200 font-urbanist'> 
                        This web-based beatmaker was developed by myself initially as a solo class project in 2022.
                            Everyday you go outside, you naturally create your own soundscape or 'world of sounds'; 
                            whether that's from birds chirping on your walk or Pop Smoke playing from the cars outside. 
                            I thought it'd be interesting if we could capture those sounds and make new music out of it ~ Everyday Sounds.
                            
                            <br/><br/>I revitalized this project in early 2024 to make it aesthetically pleasing, built on React and 
                            incorporate new functionality that empowers people to make music.
                        </p>
                        <div className="flex flex-col">
                            <img className="w-[95%] md:w-[80%] self-center mt-[3vw] md:mt-[1.5vw] mb-[3vw] md:mb-[1vw] h-auto object-cover" src={require('../photos/everydaysounds/esv2_final.png')} alt="first hi-fi wireframe"/>
                        </div>
                        
                    </div>

                    <div className='bg-stone-600 h-min mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-limelight font-normal'>SPECIFICATIONS</p>
                        <p className='mt-[1vw] font-light text-[16px] text-stone-200 font-urbanist'> 
                        <b><u>Date:</u></b> April 2022 - June 2024 <br/>
                        <b><u>Client(s):</u></b> Lord Crawford & Anyone (Personal Project) <br/>
                        <b><u>Tools Used:</u></b> Javascript (React), HTML, CSS, Figma, Adobe Illustrator, Vercel <br/>
                        <b><u>Role:</u></b> Sole Developer and Designer <br/> <br/>
                        <b><u>URL/Link:</u></b> <a href="https://www.everydaysounds.live" className="text-cyan-400 font-bold hover:text-fuchsia-400">everydaysounds.live</a> <br/>
                        <b><u>Figma: </u></b> <a href="https://www.figma.com/design/7nh13hwTftSHyRtyUoaeMV/Everyday-Sounds?node-id=105-159&t=pgEzHKFg9mwEflaW-1" class="text-cyan-400 font-bold hover:text-fuchsia-400">Visit Here</a>
                        </p>
                        
                    </div>

                    <div className='bg-stone-800 h-min mt-[5vw] md:mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-limelight font-normal'>IDEATION</p>
                        <p className='mt-[1vw] font-light text-[16px] text-stone-200 font-urbanist '> 
                            During my senior spring semester at Columbia, I took a class called 
                            'History & Practice of Electronic Music' which taught me core elements of music production
                            and emerging audio technologies. For the final project, there was an
                            option to create a song and I thought it'd be fascinating to utilize my programming skills to 
                            make a digital instrument that could make music.
                        </p>
                        
                    </div>

                    <div className='bg-stone-600 h-min mt-[5vw] md:mt-[2.5vw] p-[10px] mr-[2vw] text-white flex flex-col'>
                        <p className='text-[5vw] md:text-[2vw] font-limelight font-normal'>RESEARCH</p>
                        <p className='mt-[1vw] font-light text-[16px] text-stone-200 mb-[1vw] font-urbanist '> 
                            In order to understand the landscape of DAWs (Digital Audio Workstation), I first invested
                            hours creating music in Audacity which is a more rudimentary tool compared to Logic or 
                            Ableton. It was here where I first learned how to apply audio tracks and create looped beats.
                        </p>
                        
                        <p className='self-center text-[13px] text-stone-200 font-light'>Audacity</p>
                        <img className="w-[90%] self-center md:w-[60%] ml-[1%] h-auto object-cover" src={require('../photos/everydaysounds/audacity_cs.png')} alt="lo-fi wireframe"/><br/>

                        <p className='mt-[1vw] font-light text-[16px] text-stone-200 mb-[1vw] font-urbanist '> 
                            Following Audacity, I learned how to use Ableton and Logic which is where I was introduced to more robust
                            beat sequencers that could add thousands of effects on top of them. This was around the same time
                            I got an AKAI MPK Mini (essentially a small physical drum pad that you can plug into your computer).
                            These tools showed me a more advanced user experience around beatmaking with a sequencer, I aimed to
                            create something it a bit simpler.
                        </p>
                    </div>

                    <div className='bg-stone-800 h-min mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-limelight font-normal'>EVERYDAY SOUNDS (V1) - DESIGN PROCESS</p>
                        <p className='mt-[1vw] font-light text-[16px] text-stone-200 font-urbanist '> 
                            <b className="text-[14pt]"><u>Wireframes</u></b> <br/><br/>
                            <div className="flex flex-col">
                                <p className="self-center">low fidelity wireframe</p>
                                <img className="w-[95%] md:w-[75%] self-center mt-[3vw] md:mt-[1.5vw] mb-[5vw] md:mb-[2vw] h-auto object-cover" src={require('../photos/everydaysounds/home.jpg')} alt="first hi-fi wireframe"/>
                                <p className="self-center mt-[5vw] md:mt-[2vw]">high fidelity wireframe</p>
                                <img className="w-[95%] md:w-[75%] self-center mt-[3vw] md:mt-[1.5vw] mb-[5vw] md:mb-[2vw] h-auto object-cover" src={require('../photos/everydaysounds/v1es.png')} alt="first hi-fi wireframe"/>
                            </div>    

                            <b className="text-[14pt]"><u>Development</u></b> <br/><br/>

                            In this first round of development, I took the specs, colors and positions from
                            the above Figma wireframe to program it into a live website. For the web development,
                            I used HTML, CSS and Javascript, specifically manipulating HTML's Audio property.<br/><br/>

                            <b className="text-[14pt]"><u>End Presentation (May 2022):</u></b> <br/><br/>
                            <div className="flex flex-col">
                                <video className='w-[95%] md:w-[80%] ml-[2%] self-center' controls poster={require('../photos/everydaysounds/v1es.png')}>
                                    <source src={require('../photos/everydaysounds/presentation.mp4')} type="video/mp4"/>
                                </video>
                            </div>
                            <br/>
                        </p>
                        
                    </div>

                    <div className='bg-stone-600 h-min mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-limelight font-normal'>EVERYDAY SOUNDS (V2) - DESIGN PROCESS</p>
                        <p className='mt-[1vw] font-light text-[16px] text-stone-200 font-urbanist '> 

                            <b className="text-[14pt]"><u>Revisiting an Old Project</u></b> <br/><br/>

                            Throughout 2023 into 2024, I continued producing music in my free time as a 
                            fun past time. During this time I had also learned React which sparked an
                            interest in revamping my old beatmaker project.<br/><br/>

                            <b className="text-[14pt]"><u>User Interviews</u></b> <br/><br/>
                            
                            Before diving back into redesigning my project, I wanted to understand what
                            people who interacted with commonly known DAWs (Digital Audio Workstations - 
                            Ableton, Logic, etc.) thought of the current industry landscape and 
                            Everyday Sounds v1. From these 3 interviews, I learned that my design was 
                            intuitive to those who had interacted with other DAWs, it just needed retouching.<br/><br/>

                            However, my curiosity grew for helping those had little to no knowledge of DAWs
                            or electronic music production. I interviewed 2 colleagues and found that the tool
                            I built was rather confusing. From here, I factored in a more detailed <i>Instructions
                            and About</i> sections, built in animation states, used clearer color schemes and 
                            stripped down some of the features.<br/><br/>

                            <b className="text-[14pt]"><u>High Fidelity Wireframes</u></b> <br/><br/>
                            
                            <div className="flex flex-col">
                                <p className="self-center mb-[1.5vw]">initial rounds</p>
                                <div className="flex flex-col md:flex-row place-content-center space-y-[2vw] md:space-y-[0vw] md:space-x-[1vw]">
                                    <img className="w-[95%] md:w-[45%] object-cover" src={require('../photos/everydaysounds/esv2_mock1.png')} alt="first hi-fi wireframe"/>
                                    <img className="w-[95%] md:w-[45%] object-cover" src={require('../photos/everydaysounds/esv2_mock2.png')} alt="first hi-fi wireframe"/>
                                </div>
                                <p className="self-center mt-[5vw] md:mt-[2vw]">final</p>
                                <img className="w-[95%] md:w-[80%] self-center mt-[3vw] md:mt-[1.5vw] mb-[5vw] md:mb-[2vw] h-auto object-cover" src={require('../photos/everydaysounds/esv2_final.png')} alt="first hi-fi wireframe"/>
                            </div>
                            

                            <b className="text-[14pt]"><u>Development:</u></b> <br/><br/>

                            In this next round of development, I once again took the specs from
                            the above Figma wireframe and programmed it into a live website. For the web development,
                            I used React (Javascript), HTML, and CSS, specifically manipulating HTML's Audio property.<br/><br/>

                        </p>
                        
                    </div>

                    <div className='bg-stone-800 border-black border-2 h-min mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-limelight font-normal'>STYLE GUIDE (V2)</p>
                        <p className='mt-[4vw] md:mt-[2vw] font-light text-[16px] text-stone-200 font-urbanist '> 

                            <b className="text-[14pt]"><u>Color</u></b> <br/><br/>

                            <div className="flex flex-row mb-[8vw] md:mb-[3vw] space-x-[1vw]">
                                <div className="w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw] bg-fuchsia-400"></div>
                                <div className="w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw] bg-cyan-400"></div>
                                <div className="w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw] bg-white border-black border-[1px]"></div>
                                <div className="w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw] bg-black border-white border-[1px]"></div>
                            </div>

                            <b className="text-[14pt]"><u>Typography</u></b> <br/><br/>

                            <div className='flex flex-col md:flex-row'>
                                <p className='font-limelight text-[21pt] mr-[5vw]'>Limelight</p>
                                <p className='text-[21pt]'>Museo Moderno</p><br/>
                            </div>

                        </p>
                        
                    </div>
                    
                </div>
            </div>
            <RightPanelSlim/>
        </div>
    )
}

export default EverydaySounds