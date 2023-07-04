
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Player from '../player'
import Trending from '../trending'
import Feed from '../feed'
import Library from '../library'
import Favorites from '../favorites'
import "./home.css"
import Sidebar from '../../components/sidebar'

import { useState, useEffect } from 'react'
import { setClientToken } from '../../spotify'
import Signup from '../auth/signUp'
import Login from '../auth/login'


export default function Home() {
  // const [token, setToken] = useState("");

  // useEffect(() => {
  //   const token = window.localStorage.getItem("token");
  //   const hash = window.location.hash;
  //   window.location.hash = "";
  //   if (!token && hash) {
  //     const _token = hash.split("&")[0].split("=")[1];
  //     window.localStorage.setItem("token", _token);
  //     setToken(_token);
  //     setClientToken(_token);
  //   } else {
  //     setToken(token);
  //     setClientToken(token);
  //   }
  // }, []);

  return  (
    <>
    

    <Router>
      
      <div className="main-body">
        <Sidebar />
        <Routes>
        <Route path="/Signup" element={< Signup/>} />
      <Route path="/Login" element={<Login/>} />
          <Route path="/player" element={<Player />} />
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/favorites" element={<Favorites />} />


        </Routes>
      </div>
    </Router>
    </>
  );
}
