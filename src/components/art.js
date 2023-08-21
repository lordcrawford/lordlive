import React from 'react'

const Art = () => {

    return (
        <div id="art">
            {/* <div id="selector" className="mb-8 ml-2 space-x-6">
                <span>all</span>
                <span>charcoal</span>
                <span>ink</span>
                <span>graphite</span>
            </div> */}
            <div id="images" className="space-y-10 space-x-5 flex flex-wrap mb-10 justify-center mt-[7%]">
                <img id="deepest_corner" className ="ink w-full md:w-[80%]" src={require('./art4website/deepest_corner.jpeg')} alt="Deepest Corner"/>
                <img id="alter_ego" className ="charcoal w-[90%] md:w-[65%]" src={require('./art4website/alter_ego.jpeg')} alt="Alter Ego"/>
                <img id="vortex" className ="charcoal w-full md:w-[90%]" src={require('./art4website/vortex.png')} alt="Vortex"/>
                <img id="new_world" className ="ink w-[80%] md:w-[52%]" src={require('./art4website/new_world.jpeg')} alt="New World"/>
                <img id="first" className ="graphite w-[80%] md:w-[45%]" src={require('./art4website/first.jpeg')} alt="First"/>
                <img id="second" className ="graphite w-[80%] md:w-[45%] " src={require('./art4website/second.jpeg')} alt="Second" />
            </div>
        </div>
    )
}

export default Art