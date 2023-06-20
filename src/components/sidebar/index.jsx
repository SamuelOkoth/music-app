import "./sidebar.css"
import SidebarButton from "./sidebarButton"
import {MdFavorite} from "react-icons/md"
import {FaGripfire,FaSignOutAlt} from "react-icons/fa"
// import { FaSignInAlt } from "react-icons/fa"
import {IoLibrary} from "react-icons/io5"
import { MdSpaceDashboard } from "react-icons/md"
import { FaPlay } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
     <img src="https://samuelokoth.github.io/samueloko.jpg" className="profile-img" alt="profile-image"></img>

<div>
<SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
<SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
<SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
<SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
<SidebarButton title="Library" to="/" icon={<IoLibrary/>}/>
</div>

<SidebarButton title="sign out" to="" icon={<FaSignOutAlt/>}/>
    </div>
  )
}
