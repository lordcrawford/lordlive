import React from 'react'
import RightPanel from "../righthalf/right_half.js";
import { useNavigate } from "react-router-dom";
import '../home.css';

const About = () => {

    const navigate = useNavigate()

    const goHome=()=>{
        navigate("/");
    }

    return (
        <div id="about">
            <div id="leftpanel" className='bg-white float-left h-screen overflow-y-scroll overflow-hidden grid justify-self-center'>
                <div id="name" className="text-[4vw] cursor-pointer ml-[3.5%] mt-[2%] space-y-[-2vw]" onClick={() => goHome()}><div>Lord</div><div>Crawford</div></div>
                <div className="text-[3.5vw] md:text-[1.2vw] mt-[10%] w-[75%] justify-self-center font-light">
                    
                    Hi! I'm Lord, born and raised in New York City where I currently reside. I've been titled many things but at my core, I'm a product manager and 
                    creative technologist. I created this website as a digital space for my thoughts and passions to intermingle, 
                    I hope it inspires others to do the same.

                    <br/> <br/>

                    Currently, I'm a Product Manager at The New York Times leading the advertising experience on NYT Games (Wordle, Connections, etc.) and NYT Cooking. 
                    Prior to this, I was a Product Manager at Twitter/X (contributing to both Ads and Localization/Translation teams), interned at Google as a Software Engineer,
                    and was the first product lead of a real estate startup. 
                    
                    In terms of my academic journey, I graduated from Columbia University with a degree in Computer Science and focus on Human-Computer Interaction. More recently, I completed
                    the Product Design Certificate Program at Pratt Institute.

                    <br/><br/> 

                    My professional expertise lies in product management, creative web design/development, and
                    human-centered design. Outside of this, I can build 3D AR & VR applications, draw using charcoal,
                    ink, and pencil mediums, and produce electronic music.

                    <br/><br/>
                    <hr></hr>
                    <br></br>

                    <span className="font-black">Consulting and Personal: </span><a className="underline decoration-blue-500 decoration-2" href="mailto:lordcrawford2@gmail.com">lordcrawford2@gmail.com</a>

                </div> 
                <div className='md:flex md:flex-row md:space-x-[10%] justify-self-center items-center place-content-center mx-[10%] my-[6%]'>
                    <img className="md:w-[40%] h-auto  object-cover" src={require('../photos/about_pic.jpeg')} alt="Bio"/>
                    <img className="md:w-[40%] h-auto  object-cover md:mt-0 mt-[8%]" src={require('../photos/about_pic2.jpg')} alt="Bio"/>
                </div>
            </div>
            <RightPanel/>
        </div>
    )
}

export default About