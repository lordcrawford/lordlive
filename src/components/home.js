import RightPanel from "./righthalf/right_half.js";
import './home.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"


const Home = () => {

    return (
        <div id="home">
            <div className="bg-white float-left h-screen overflow-y-scroll" id="leftpanel">
                <h1 id="name" className="text-8xl cursor-pointer w-1/2 pl-[3.5%] pt-[4%]" >Lord<br></br> Crawford</h1>
                <div>
                    <div>
                        <div id="summary">
                            multi-disciplinary creation<br/>
                            current work: everyday sounds<br/> <br/>
                            Based in New York City<br/><br/>
                        </div>
                        {/* <img id="figure" className ="float-right w-[17%]" src={require('./photos/figure.gif')} alt="Figure" /> */}
                    </div>
                </div>
            </div>
            <RightPanel/>
            <Analytics/>
            <SpeedInsights/>
        </div>
    )
}

export default Home