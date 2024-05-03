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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/art" element={<Art/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/writing" element={<Writing/>}/>
      </Routes>
    </Router>
  );
}
  
export default App;
