
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Player from '../player/player'
import Trending from '../trending/trending'
import Feed from '../feed/feed'
import Library from '../library/library'
import Favorites from '../favorites/favorites'
import "./home.css"
import Sidebar from '../../components/sidebar'
import Login from '../auth/login'

export default function Home() {
  return (
    <Router >
        <div className="main-body">
         <Login/>
          {/* <Sidebar/>
          <Library />
        <Routes>
        <Route path="/library" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes> */}
        </div>
      
    </Router>
  )
}
