import './App.css';
import React from 'react'

import { 
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Home from './components/home.js';
import About from './components/about.js';
import Art from './components/art.js';
import Writing from './components/writing.js';
import Projects from './components/projects.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="art" element={<Art/>} />
        <Route path="writing" element={<Writing/>} />

        {/* will auto-route any wrong url to Home */}
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
  
export default App;
