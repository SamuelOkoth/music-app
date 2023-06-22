
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Player from '../player/player'
import Trending from '../trending/trending'
import Feed from '../feed/feed'
import Library from '../library/library'
import Favorites from '../favorites/favorites'
import "./home.css"
import Sidebar from '../../components/sidebar'
import Login from '../auth/login'
import { useState, useEffect } from 'react'
import { setClientToken } from '../../spotify'

export default function Home() {

const [token,setToken] =  useState("");

useEffect (() => {
  const token = localStorage.getItem("token");
  const hash = window.location.hash;  //gives us the path to the  current window
  window.location.hash = ""; //
  if (!token && hash) {
    const _token = hash.split("&")[0].split("=")[1];
    window.localStorage.setItem("token",_token);
    setToken(_token);
    setClientToken(_token);
  } else {
    setToken(token);
    setClientToken(token);
  }
  
  

  },[]);

  return ! token ? (
    <Login/>
  ): (
    <Router >
        <div className="main-body">
        
          <Sidebar/>
          <Library />
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
