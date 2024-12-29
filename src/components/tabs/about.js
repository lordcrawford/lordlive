import React, { useEffect } from 'react';
import RightPanelSlim from "../righthalf/right_half_slim.js"
import { useNavigate } from "react-router-dom";
import '../home.css';

const About = () => {

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
        <div id="about">
            <div id="leftpanel_wide" className='bg-white float-left h-screen grid overflow-y-scroll justify-self-center w-2/3'>
                <div id="name" className="text-[4vw] cursor-pointer ml-[3.5%] mt-[2%] space-y-[-2vw]" onClick={() => goHome()}><div>Lord</div><div>Crawford</div></div>
                <div className="text-[3.5vw] md:text-[17px] mt-[5%] w-[80%] justify-self-center font-normal font-urbanist">
                    
                    Lord Crawford is a native New Yorker working at the intersection of technology 
                    and creativity, dedicated to crafting impactful digital experiences. 
                    Currently, as a Product Manager at The New York Times, he leads the advertising 
                    experience for <a className="text-blue-500 font-medium italic hover:font-bold" 
                    href="https://www.nytimes.com/crosswords">NYT Games</a> (Wordle, Connections, Crossword, etc.) 
                    and <a className="text-blue-500 font-medium italic hover:font-bold" 
                    href="https://cooking.nytimes.com/">NYT Cooking</a>. 
                    <br/><br/>
                    Previously, he was a Product Manager at Twitter/X, a Software Engineer intern at Google,
                    and served as the first product lead at a real estate startup. He holds a degree in 
                    Computer Science from Columbia University with a focus on Human-Computer Interaction 
                    and recently completed the Digital Product Design Certificate Program at Pratt Institute.
                    He also serves on the Board of Trustees at <a className="text-blue-500 italic font-medium 
                         hover:font-bold" href="https://www.sthopeleadershipacademy.org/about/">
                            St. HOPE Leadership Academy</a>.<br/><br/>

                    In addition to his professional roles, Lord has built a variety of digital projects from 
                    scratch, including a <a className="text-blue-500 font-medium italic hover:font-bold" 
                    href="https://www.everydaysounds.live/">web-based digital audio workstation</a>, <a 
                    className="text-blue-500 font-medium italic hover:font-bold" 
                    href="https://www.lord.live/vrcooking"> virtual reality cooking simulator</a>, 
                    and <a className="text-blue-500 font-medium italic hover:font-bold" 
                    href="https://www.lord.live/projects">more</a>. Lord welcomes new collaborations 
                    and creative projects — please feel free to reach out.


                    <br/><br/>

                    <h2 className="font-extrabold md:text-[18px]">Contact </h2>
                    <ul className='list-[square] list-outside md:list-inside pl-3'>
                        <li>Email: <a className="underline decoration-purple-500 decoration-[3px] hover:font-bold" href="mailto:lordcrawford2@gmail.com">lordcrawford2@gmail.com</a></li>
                        <li>Social: <a className="underline decoration-purple-500 decoration-[3px] hover:font-bold" href="https://www.linkedin.com/in/lord-crawford/">LinkedIn</a></li>
                    </ul>
                    <br/>

                    <h2 className="font-extrabold md:text-[18px]">Specialities</h2>
                    <ul className='list-[square] list-outside md:list-inside pl-3'>
                        <li>Product Management & Strategy</li>
                        <li>Human-Centered Design</li>
                        <li>UI/UX Design</li>
                        <li>Web Design & Development</li>
                        <li>Augmented & Virtual Reality</li>
                    </ul> <br/>

                    <h2 className="font-extrabold md:text-[18px]">Awards</h2>
                    <p className='mt-[5px] italic'>The New York Times</p> 
                    <ul className='list-[square] list-outside md:list-inside pl-3'>
                        
                        <li className='md:pl-3'>Publisher Award (Games Sponsorships)</li>
                        <li className='md:pl-3'>Publisher Award (Cooking Product Development)</li>
                        <li className='md:pl-3'>Product Development of the Year (2023)</li>
                        <li className='md:pl-3'>Maker Week 2024 - Team Project Awarded 'Best Design'</li>
                    </ul>

                    <p className="mt-[10px] italic">Columbia University</p>
                    <ul className='list-[square] list-outside md:list-inside pl-3'>
                        
                        <li className='md:pl-3'>Dean's List</li>
                        <li className='md:pl-3'>Columbia in Tech 'Rising Star' Fellow</li>
                        <li className='md:pl-3'><a className="text-blue-500 font-medium 
                         hover:font-bold" href="https://www.cc-seas.columbia.edu/awards/descriptions/ZviGalilAward">Zvi Galil</a> (2020)</li>
                        <li className='md:pl-3'><a className="text-blue-500 font-medium 
                         hover:font-bold" href="https://neighbors.columbia.edu/content/dyckman-institute-scholarship">
                            Dyckman Scholar</a></li>
                    </ul>
                    
                    <p className="mt-[10px] italic">External</p>
                    <ul className='list-[square] list-outside md:list-inside pl-3'>
                        <li className='md:pl-3'><a className="text-blue-500 font-medium 
                         hover:font-bold" href="https://www.aigany.org/">
                            American Institute of Graphic Arts NY</a> Design Fellow</li>
                        <li className='md:pl-3'><a className="text-blue-500 font-medium 
                         hover:font-bold" href="https://www.anddesign.co/fellows-profiles/lord-crawford">Access&_Design Fellow</a></li>
                        <li className='md:pl-3'>Dr. Calvin Martin Memorial Scholar</li>
                    </ul> <br/>

                    <h2 className="font-extrabold md:text-[18px]">Education</h2>
                    <ul className='list-[square] list-outside md:list-inside pl-3'>
                        <li>Columbia University - Bachelor of Science, Computer Science </li>
                        <li>Pratt Institute - Digital Product Design Certificate</li>
                        <li>CCA - Graphic Design Specialization (Online, In-Progress)</li>
                    </ul> <br/>

                    <hr></hr>


                </div> 
                <div className='md:flex md:flex-row md:space-x-[10%] justify-self-center items-center place-content-center mx-[10%] my-[6%]'>
                    <img className="md:w-[50%] h-auto  object-cover" src={require('../photos/newaboutpic.jpg')} alt="Bio"/>
                </div>
            </div>
            <RightPanelSlim/>
        </div>
    )
}

export default About