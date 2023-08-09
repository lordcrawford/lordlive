import React from 'react'
import './projects.css';

const Projects = () => {

    function goToLink(link) {
        window.location.href = link;
    }

    return (
        <div id="projects">
            <div id="all_project_list w-4/5 h-full" class="space-y-4 mb-10">
                <div class="project cursor-pointer flex flex-row h-24 border-b-2 border-l-2 pl-4 border-black 
                transition transform hover:skew-y-1 hover:border-l-8 hover:bg-indigo-300"
                onClick={(e) => goToLink('https://lordcrawford.github.io/everydaysounds/')}>
                    <div class="title self-center text-2xl w-2/5 pr-2">Everyday Sounds</div>
                    <div class="description self-center text-sm w-3/5 pl-3">Web-based beat maker</div>
                </div>

                <div class="project flex flex-row h-24 border-b-2 border-l-2 pl-4 border-black 
                transition transform hover:skew-y-1 hover:border-l-8 hover:bg-green-100">
                    <div class="title self-center text-2xl w-2/5 pr-2">2ofAKind Vending</div>
                    <div class="description self-center text-sm w-3/5 pl-3"> Fully designed and built website 
                    for a vending machine business</div>
                </div>

                <div class="project cursor-pointer flex flex-row h-24 border-b-2 border-l-2 pl-4 border-black 
                transition transform hover:skew-y-1 hover:border-l-8 hover:bg-red-300"
                onClick={(e) => goToLink('https://youtu.be/qeGczrRkh34')}>
                    <div class="title self-center text-2xl w-2/5 pr-2">VR Cooking Simulator</div>
                    <div class="description self-center text-sm w-3/5 pl-3 pr-4">Virtual kitchen environment that teaches players how to make pancakes</div>
                </div>

                <div class="project cursor-pointer flex flex-row h-24 border-b-2 border-l-2 pl-4 border-black 
                transition transform hover:skew-y-1 hover:border-l-8 hover:bg-purple-100"
                onClick={(e) => goToLink('https://www.marketingdive.com/news/new-york-times-wordle-new-mobile-ad-format-doordash/685073/')}>
                    <div class="title self-center text-2xl w-2/5 pr-2">Wordle Mobile Ad</div>
                    <div class="description self-center text-sm w-3/5 pl-3"> Supported the launch of a full-screen interstitial
                    advertisement on The New York Times' Wordle game</div>
                </div>

                <div class="project cursor-pointer flex flex-row h-24 border-b-2 border-l-2 pl-4 border-black 
                transition transform hover:skew-y-1 hover:border-l-8 hover:bg-orange-100"
                onClick={(e) => goToLink('https://business.twitter.com/en/help/campaign-setup/campaign-targeting/custom-audiences.html')}>
                    <div class="title self-center text-2xl w-2/5 pr-2">Audience Sharing</div>
                    <div class="description self-center text-sm w-3/5 pl-3"> Twitter Ads feature that allows 
                    advertisers to share audiences amongst each other and more effectively reach their audiences</div>
                </div>

                <div class="project flex flex-row h-24 border-b-2 border-l-2 pl-4 border-black 
                transition transform hover:skew-y-1 hover:border-l-8 hover:bg-yellow-100">
                    <div class="title self-center text-2xl w-2/5 pr-2">A Post a Day Keeps the Doctor Away</div>
                    <div class="description self-center text-sm w-3/5 pl-3"> Human-Computer Interaction paper analyzing the factors 
                        that affect people’s willingness to share personal info on online self-diagnosis platforms</div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects