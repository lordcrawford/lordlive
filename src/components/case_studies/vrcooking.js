import React, {useEffect} from 'react'
import RightPanel from "../righthalf/right_half.js";
import { useNavigate } from "react-router-dom";
import '../home.css';
import RightPanelProjects from '../righthalf/right_half_project.js';


const VRCooking = () => {

    const navigate = useNavigate()

    const goHome=()=>{
        navigate("/");
    }

    useEffect(() => {
        const rightPanel = document.getElementById('rightpanel_projects');
        const leftPanel = document.getElementById('leftpanel_projects');

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
        <div id="vrcooking">
            <div id="leftpanel_projects" className='bg-white float-left h-screen overflow-y-scroll overflow-hidden justify-self-center'>
                <div id="name" className="text-[4vw] cursor-pointer ml-[3.5%] mt-[2%] space-y-[-2vw]" onClick={() => goHome()}><div>Lord</div><div>Crawford</div></div>
                <hr className='mt-[2vw] mx-[2vw] border-black border-[1px]'/>
                <div className=' ml-[3.5%] pb-[3vw]'>
                    <div className='flex flex-col md:flex-row justify-between mt-[2%]'>
                        <h1 id="es_title"className="underline decoration-wavy decoration-[3px] 
                        underline-offset-[13px] text-[9vw] md:text-[3.5vw] text-yellow-500 
                        font-medium self-center w-[70%]">VR Pancake Cooking Simulator</h1>
                        <a href="https://youtu.be/qeGczrRkh34" className="mt-[2vw] md:mt-0 mr-[5%] bg-yellow-500 p-[1.5%] h-min 
                        text-white self-center hover:bg-yellow-600 text-center">Visit Live Demo &rarr;</a>
                    </div>
                    <div className='bg-stone-800 h-min mt-[5vw] md:mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Summary</p>
                        <p className='mt-[1vw] font-light font-urbanist text-[16px] text-stone-200'>
                            In this project, we explored how Virtual Reality can be used to teach a user how to follow
                            a recipe in a virtual environment containing the necessary virtual appliances,
                            utensils, and ingredients. Users are tasked with creating pancakes with fruits on 
                            top with step by step guidance from the application. <br/> <br/> The virtual environment is set
                            in a large kitchen where users can teleport throughout the scene and use hand 
                            tracking or controller input to interact with objects (MRTK)
                        </p>
                        
                    </div>

                    <div className='bg-stone-600 h-min mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Specifications</p>
                        <p className='mt-[1vw] font-light text-[16px] text-stone-200 font-urbanist'> 
                            <b><u>Date:</u></b> Jan 2022 - May 2022<br/>
                            <b><u>Client(s):</u></b> Columbia University CS Department<br/>
                            <b><u>Tools Used:</u></b> Unity 3D, C#, MRTK (Hand-Tracking), Oculus Quest 2 <br/>
                            <b><u>Role:</u></b> Developer on a team of 3 other developers, I led 'Object Manipulation' for this project<br/> <br/>
                            <b><u>Demo Video:</u></b> <a href="https://youtu.be/qeGczrRkh34" className="text-yellow-500 font-bold hover:text-fuchsia-400">https://youtu.be/qeGczrRkh34</a> <br/>
                        </p>
                        
                    </div>

                    <div className='bg-stone-800 h-min mt-[5vw] md:mt-[2.5vw] p-[10px] mr-[2vw] text-white'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Ideation</p>
                        <p className='mt-[1vw] font-light text-[16px] text-stone-200 font-urbanist'> 
                        As a team, we aimed to explore virtual environments that are familiar to most people 
                        and identify simple tasks to perform within them. Cooking naturally came to mind since
                         it is a common activity, and the kitchen is an environment that many can easily 
                         visualize. We then brainstormed simple cooking tasks with fewer than ten steps and 
                         chose the process of making a pancake using a pre-made mix. This choice allowed us 
                         the freedom to design a straightforward kitchen environment, organize the materials,
                          and create a clear process for someone to make an actual meal.

                        </p>
                        
                    </div>

                    <div className='bg-stone-600 h-min mt-[5vw] md:mt-[2.5vw] p-[10px] mr-[2vw] text-white flex flex-col'>
                        <p className='text-[5vw] md:text-[2vw] font-normal'>Storyboard</p>
                        <p className='mt-[1vw] font-light text-[16px] text-stone-200 mb-[2vw] font-urbanist'> 
                            The below storyboard mocks an example scenario where 'Evelyn' is using our proposed
                            VR Cooking Pancake Simulator during one of their streams.
                        </p>
                        
                        <p className='self-center text-[13px] text-stone-200 font-light font-urbanist'>Example Scenario</p>
                        <img className="w-[95%] self-center md:w-[80%] ml-[1%] h-auto object-cover" src={require('../photos/vrcooking/storyboard1_vrcooking.png')} alt="lo-fi wireframe"/><br/>
                    </div>

                    <div className='bg-stone-800 h-min mt-[2.5vw] p-[10px] mr-[2vw] font-urbanist text-white flex flex-col'>
                        <p className='text-[5vw] md:text-[2vw] font-museomoderno font-normal'>Technical Development</p>
                        <p className='mt-[1vw] font-light text-[16px] text-stone-200'> 
                            <b className="text-[14pt]"><u>Object Manipulation (My Role)</u></b> <br/><br/>
                        </p>
                        <p className='font-light text-[16px] text-stone-200 mb-[2vw]'> 
                            I programmed the ability for users to grab objects and translate or rotate them. This is
                            a core component of being able to wield cooking tools and mix ingredients together. Objects would 
                            change form depending on other influences such as mixing materials, heat, cutting, etc. As well, 
                            some events depend on object orientation to start (i.e. the pancake mix will start pouring 
                            only when it’s rotated beyond certain angle). <br/><br/>

                            Separately, I programmed the function around the oven cooking food and how objects 
                            would change form as a result overtime. This all involved utilizing direct interaction
                            for hand tracking based on one-hand controller inputs. User hands were treated as Physics objects.

                        </p>
                        <div className="flex flex-col">
                                <p className="self-center mb-[1.5vw] font-urbanist">interacting with ingredients</p>
                                <div className="flex flex-col md:flex-row place-content-center space-y-[2vw] md:space-y-[0vw] md:space-x-[1vw]">
                                    <img className="w-[95%] md:w-[45%] object-cover" src={require('../photos/vrcooking/object3.jpg')} alt="first hi-fi wireframe"/>
                                    <img className="w-[95%] md:w-[45%] object-cover" src={require('../photos/vrcooking/object2.jpg')} alt="first hi-fi wireframe"/>
                                </div>
                                <p className="self-center mt-[5vw] md:mt-[2vw] font-urbanist">cooking using the ingredients and tools</p>
                                <img className="w-[95%] md:w-[65%] self-center mt-[3vw] md:mt-[1.5vw] mb-[5vw] md:mb-[2vw] h-auto object-cover" src={require('../photos/vrcooking/object1.jpg')} alt="first hi-fi wireframe"/>
                        </div>

                        <p className='mt-[1vw] font-light text-[15px] text-stone-200'> 
                            <b className="text-[14pt]"><u>Wayfinding</u></b> <br/><br/>
                        </p>

                        <p className='font-light text-[16px] text-stone-200 mb-[2vw]'> 
                            Another teammate implemented the ability for users to move around the kitchen.
                            They specified destination gaze using controller input and limited wrist rotation. There were also 
                            arrows that helped direct users to the object they need to complete current step
                             (e.g. butter in the fridge). Separately, they implemented various tools to help with directions such as audio pings, bright outline highlights and 
                             fade teleportation that anchored user movements. <br/><br/>
                             
                            Separately, another teammate implemented a task board that controlled the instructions behind the cooking steps and the entire simulator.

                        </p>

                        <img className="self-center w-[95%] md:w-[60%] ml-[2%] h-auto object-cover" src={require('../photos/vrcooking/wayfinding.jpg')} alt="first hi-fi wireframe"/><br/>
                        
                        <p className='mt-[1vw] font-light text-[15px] text-stone-200'> 
                            <b className="text-[14pt]"><u>Kitchen Environment</u></b> <br/><br/>
                        </p>

                        <p className='font-light text-[16px] text-stone-200 mb-[2vw]'> 
                            Lastly, another teammate designed and constructed the kitchen environment. 

                        </p>

                        <img className="self-center w-[95%] md:w-[80%] ml-[2%] h-auto object-cover" src={require('../photos/vrcooking/kitchen.png')} alt="first hi-fi wireframe"/><br/>
                        
                    </div>
                    
                </div>
            </div>
            <RightPanelProjects/>
        </div>
    )
}

export default VRCooking