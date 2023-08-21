import React from 'react'

const About = () => {

    return (
        <div id="about" className='w-full text-[2.1vw] md:text-[1.1vw]'>
            <h1>
                <div className="mb-[3%] md:flex md:items-center">
                    <img className="md:w-[27%] md:mr-[4%] md:self-center" src={require('./about_pics/otherpic.jpeg')} alt="Bio"/>
                    <div className="md:w-[50%] mt-[4%] md:mt-[0%]">
                    Hey, I'm Lord. I created this website as a space for my passions to intermingle, 
                    I hope it inspires others to create a space for their thoughts to live. I'm an 
                    African American born and raised in New York City. I've been titled many things — 
                    a product manager, programmer, designer, analyst, artist, etc. At my core, I'd 
                    say a creative architect and student of the world. 
                    </div>
                    
                </div> 

                <div className="md:w-[81%]">
                    Currently, I'm a Product Manager at The New York Times. In 2022, I graduated from 
                    Columbia University with a degree in Computer Science and focus on Human-Computer Interaction.
                    <br/><br/> 

                    <span className="underline decoration-green-500 decoration-2">My professional expertise lies in product management, product consulting, creative web design/development, and
                    human-centered design.</span> Outside of this, I can build 3D AR & VR applications, draw using charcoal,
                    ink, and pencil mediums, and produce electronic music.

                    <br/><br/>

                    <span className="font-black">for consulting and personal: </span><a className="underline decoration-red-500 decoration-2" href="mailto:lordcrawford2@gmail.com">lordcrawford2@gmail.com</a>
                </div>
            </h1>
            
        </div>
    )
}

export default About