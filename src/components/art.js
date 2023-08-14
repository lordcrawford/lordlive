import React from 'react'

const Art = () => {

    return (
        <div id="art">
            <div id="selector" className="mb-8 ml-2 space-x-6">
                <span>all</span>
                <span>charcoal</span>
                <span>ink</span>
                <span>graphite</span>
                
            </div>
            <div id="images" className="space-y-10 space-x-5 flex flex-wrap mb-10">
                <img id="deepest_corner" className ="ink" src={require('./art4website/deepest_corner.jpeg')} alt="Deepest Corner" 
                    width="80%"/>
                <img id="alter_ego" className ="charcoal" src={require('./art4website/alter_ego.jpeg')} alt="Alter Ego"
                    width="70%" />
                <img id="vortex" className ="charcoal" src={require('./art4website/vortex.png')} alt="Vortex" 
                    width="80%"/>
                <img id="new_world" className ="ink" src={require('./art4website/new_world.jpeg')} alt="New World" 
                    width="60%"/>
                <img id="first" className ="graphite" src={require('./art4website/first.jpeg')} alt="First" 
                    width="45%"/>
                <img id="second" className ="graphite" src={require('./art4website/second.jpeg')} alt="Second" 
                    width="45%"/>
            </div>
        </div>
    )
}

export default Art