import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Video from './pages/video';
import Image from './pages/image';
import Music from './pages/music';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/video' element={<Video/>} />
        <Route path='/image' element={<Image/>} />
        <Route path='/music' element={<Music/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
