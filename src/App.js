import React from 'react'

import { 
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

import Home from './components/home.js';
import About from './components/tabs/about.js';
import Art from './components/tabs/art.js';
import Projects from './components/tabs/projects.js';
import Writing from './components/tabs/writing.js';
import Music from './components/tabs/music.js';

import EverydaySounds from './components/case_studies/everydaysounds.js';
import VRCooking from './components/case_studies/vrcooking.js';
import BloombergConnects from './components/case_studies/bloombergconnects.js';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>
        <Route path="/art" exact element={<Art/>}/>
        <Route path="/projects" exact element={<Projects/>}/>
        <Route path="/music" exact element={<Music/>}/>
        <Route path="/writing" exact element={<Writing/>}/>

        <Route path="/everydaysounds" exact element={<EverydaySounds/>}/>
        <Route path="/vrcooking" exact element={<VRCooking/>}/>
        <Route path="/bloombergconnects" exact element={<BloombergConnects/>}/>


        <Route path="/*" exact element={<Home/>}/>
      </Routes>
    </Router>
  );
}
  
export default App;
