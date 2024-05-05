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

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

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
        <Route path="/*" exact element={<Home/>}/>
      </Routes>
    </Router>
  );
}
  
export default App;
