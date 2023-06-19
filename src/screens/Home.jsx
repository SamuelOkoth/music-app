import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Player from './player'
import Trending from './trending'
import Feed from './feed'
import Library from './library'
import Favorites from './favorites'
import "./home.css"

export default function Home() {
  return (
    <Router className="main-body">
        <div>
        <Routes>
        <Route path="/library" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
        </div>
      
    </Router>
  )
}
