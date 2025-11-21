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
                    and creativity. Currently, as a Design Master's student at Stanford University's <a className="underline decoration-blue-500 underline-offset-[2px] decoration-[2px] hover:font-semibold" 
                    href="https://dschool.stanford.edu/directory/lord-crawford">d.school</a>, 
                    he is exploring graphics, computer vision, and human-AI interaction. 
                    Lord is dedicated to crafting impactful digital experiences that can 
                    adapt to a user's needs and preferences as it pertains to context, 
                    demographic, and ability. 
                    <br/><br/>
                    Before joining the d.school, Lord spent three years as a product manager within the media
                    industry—most recently at The New York Times and Twitter—where he designed and built advertising 
                    products and localization strategies at scale. His background in product management deeply 
                    informs his design practice, grounding his work in user-centered research, technical intuition,
                     and strategic thinking.
                    <br/><br/>
                    He holds a Bachelor's degree in Computer Science from Columbia University with a 
                    focus on Human-Computer Interaction and completed the Digital Product Design Certificate 
                    Program at Pratt Institute. Outside of these professional roles, Lord has built a variety of creative tech projects, 
                    including a web-based digital audio workstation, virtual reality cooking simulator, 
                    and <a className="underline decoration-blue-500 underline-offset-[2px] decoration-[2px] hover:font-semibold" 
                    href="https://www.lord.live/projects">more</a>. As well, hailing from Washington Heights, New York, Lord is
                    passionate about serving the Harlem community that nurtured him and is on the Board of Trustees for <a className="underline decoration-blue-500 
                    underline-offset-[2px] decoration-[2px] hover:font-semibold" href="https://www.sthopeleadershipacademy.org/about/board-of-directors/board-members-biographies/">
                    St. HOPE Leadership Academy</a>.<br/><br/>
                    
                    Lord welcomes new collaborations 
                    and creative projects — please feel free to reach out.


                    <br/><br/>

                    <h2 className="font-extrabold md:text-[18px]">Contact </h2>
                    <ul className='list-[square] list-outside md:list-inside pl-3'>
                        <li>Email: <a className="underline decoration-purple-500 decoration-[3px] hover:font-semibold" href="mailto:lordcrawford2@gmail.com">lordcrawford2@gmail.com</a></li>
                        <li>Social: <a className="underline decoration-purple-500 decoration-[3px] hover:font-semibold" href="https://www.linkedin.com/in/lord-crawford/">LinkedIn</a></li>
                    </ul>
                    <br/>

                    <h2 className="font-extrabold md:text-[18px]">Specialities</h2>
                    <ul className='list-[square] list-outside md:list-inside pl-3'>
                        <li>UI/UX Design</li>
                        <li>Product Management & Strategy</li>
                        <li>Human-Centered Design</li>
                        <li>Web Design & Development</li>
                        <li>Augmented & Virtual Reality</li>
                    </ul> <br/>

                    <h2 className="font-extrabold md:text-[18px]">Awards</h2>

                        <p className="mt-[10px] italic">Stanford University</p>
                        <ul className='list-[square] list-outside md:list-inside pl-3'>
                            <li className='md:pl-3'>2025 - School of Engineering Graduate Fellowship</li>
                        </ul>
                        
                        <p className='mt-[5px] italic'>The New York Times</p> 
                        <ul className='list-[square] list-outside md:list-inside pl-3'>
                            
                            <li className='md:pl-3'>2024 - Publisher Award (Games Sponsorships)</li>
                            <li className='md:pl-3'>2024 - Publisher Award (Cooking Product Development)</li>
                            <li className='md:pl-3'>2024 - Maker Week Team Project Awarded 'Best Design'</li>
                            <li className='md:pl-3'>2023 - NYT Advertising Product Development of the Year</li>
                        </ul>

                        <p className="mt-[10px] italic">Columbia University</p>
                        <ul className='list-[square] list-outside md:list-inside pl-3'>
                            <li className='md:pl-3'>2024 - Hsing Fellow</li>
                            <li className='md:pl-3'>2022 - Dean's List</li>
                            <li className='md:pl-3'>2020 - Zvi Galil Award, Columbia Organization of Rising Entreprenuers (CORE)</li>
                            <li className='md:pl-3'>2018 - Dyckman Scholar</li>
                        </ul>
                        
                        <p className="mt-[10px] italic">External</p>
                        <ul className='list-[square] list-outside md:list-inside pl-3'>
                            <li className='md:pl-3'>2025 - US/UK Fulbright Postgraduate Study Award</li>
                            <li className='md:pl-3'>2025, 2018 - Dr. Calvin Martin Memorial Scholar</li>
                            <li className='md:pl-3'>2025, 2024 - American Institute of Graphic Arts (AIGA) NY Design Fellow</li>
                            <li className='md:pl-3'>2021 - <a className="underline decoration-blue-500 
                            underline-offset-[2px] decoration-[2px] hover:font-semibold" 
                            href="https://www.anddesign.co/fellows-profiles/lord-crawford">Access&_Design Fellow</a></li>
                        </ul> 
                    <br/>

                    <h2 className="font-extrabold md:text-[18px]">Education</h2>
                    <ul className='list-[square] list-outside md:list-inside pl-3'>
                        <li>Stanford University - Master of Science, Design (In-Progress)</li>
                        <li>Columbia University - Bachelor of Science, Computer Science</li>
                        <li>Pratt Institute - Digital Product Design Certificate</li>
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