import React, { useEffect } from 'react';
import RightPanel from "../righthalf/right_half.js";
import { useNavigate } from "react-router-dom";
import '../home.css';

const About = () => {

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
        <div id="about">
            <div id="leftpanel" className='bg-white float-left h-screen overflow-y-scroll overflow-hidden grid justify-self-center'>
                <div id="name" className="text-[4vw] cursor-pointer ml-[3.5%] mt-[2%] space-y-[-2vw]" onClick={() => goHome()}><div>Lord</div><div>Crawford</div></div>
                <div className="text-[3.5vw] md:text-[16px] mt-[5%] w-[80%] justify-self-center font-normal font-urbanist">
                    
                    Hi! I'm Lord, a native New Yorker passionate about the intersection of technology and creativity.
                    At my core, I'm a product manager and creative technologist that crafts elegant digital experiences. 
                    Currently, as a Product Manager at The New York Times I lead the advertising 
                    experience for NYT Games (Wordle, Connections, etc.) and NYT Cooking. 
                    <br/><br/>
                    Prior to this, I was a Product Manager at Twitter/X, interned as a Software Engineer at Google,
                    and served as the first product lead at a real estate startup. I hold a degree in 
                    Computer Science from Columbia University with a focus on Human-Computer Interaction 
                    and recently completed the Product Design Certificate Program at Pratt Institute.<br/><br/>

                    Feel free to explore my work or connect with me — I’m always open to new ideas and collaborations.



                    <br/><br/>

                    <h2 className="font-extrabold">Contact </h2>
                    <ul className='list-[square] list-inside'>
                        <li>Email: <a className="underline decoration-red-500 decoration-2" href="mailto:lordcrawford2@gmail.com">lordcrawford2@gmail.com</a></li>
                        <li>Social: <a className="underline decoration-blue-500 decoration-2" href="https://www.linkedin.com/in/lord-crawford/">LinkedIn</a></li>
                    </ul>
                    <br/>

                    <h2 className="font-extrabold">Specialities</h2>
                    <ul className='list-[square] list-inside'>
                        <li>Product Management</li>
                        <li>Human-Centered Design</li>
                        <li>UI/UX Design</li>
                        <li>Web Design & Development</li>
                    </ul> <br/>

                    <h2 className="font-extrabold">Awards</h2>
                    <ul className='list-[square] list-inside'>
                        <li>NYT - Publisher Award (Games Sponsorships)</li>
                        <li>NYT - Publisher Award (Cooking Product Development)</li>
                        <li>NYTA - Product Development of the Year (2023)</li>
                        <li>NYT Maker Week - Team Project Awarded 'Best Design'</li>
                    </ul> <br/>

                    <h2 className="font-extrabold">Education</h2>
                    <ul className='list-[square] list-inside'>
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
            <RightPanel/>
        </div>
    )
}

export default About