import { useEffect } from 'react';
import RightPanel from "./righthalf/right_half.js";
import './home.css';


const Home = () => {

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
        <div id="home">
            <div className="bg-white float-left h-screen overflow-y-scroll" id="leftpanel">
                <h1 id="name" className="text-8xl cursor-pointer w-1/2 pl-[3.5%] pt-[4%]" >Lord<br></br> Crawford</h1>
                <div>
                    <div>
                        <div id="summary">
                            multi-disciplinary creation<br/>
                            current work: something new<br/> <br/>
                            Based in New York City<br/><br/>
                        </div>
                    </div>
                </div>
            </div>
            <RightPanel />
        </div>
    )
}

export default Home