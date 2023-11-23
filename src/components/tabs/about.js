import React from 'react'

const About = () => {

    return (
        <div id="about" className='text-[3.5vw] md:text-[1.2vw] overflow-hidden md:w-[75%] grid justify-self-center'>
            <div className="">
                Hey, I'm Lord. I'm an African American born and raised in New York City. I've been titled many things — 
                a product manager, programmer, designer, analyst, artist, etc. At my core, I'd 
                say I'm a creative architect and student of the world. I created this website as a space for my thoughts and passions to intermingle, 
                I hope it inspires others to create their own spaces.
            </div>
            <img className="md:w-[40%] w-[85%] justify-self-center my-[5%]" src={require('../photos/about_pic.jpeg')} alt="Bio"/>
            <div className="mb-[10%]">
                Currently, I'm a Product Manager at The New York Times leading the advertising experience on NYT Games (think Wordle...) and NYT Cooking.
                In 2022, I graduated from Columbia University with a degree in Computer Science and focus on Human-Computer Interaction. 
                <br/><br/> 

                My professional expertise lies in product management, creative web design/development, and
                human-centered design. Outside of this, I can build 3D AR & VR applications, draw using charcoal,
                ink, and pencil mediums, and produce electronic music.

                <br/><br/>

                <span className="font-black">for consulting and personal matters: </span><a className="underline decoration-blue-500 decoration-2" href="mailto:lordcrawford2@gmail.com">lordcrawford2@gmail.com</a>

            </div>  
        </div>
    )
}

export default About