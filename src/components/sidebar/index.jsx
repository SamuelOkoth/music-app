import "./sidebar.css"
import SidebarButton from "./sidebarButton"
import {MdFavorite} from "react-icons/md"
import {FaGripfire,FaSignOutAlt} from "react-icons/fa"
// import { FaSignInAlt } from "react-icons/fa"
import {IoLibrary} from "react-icons/io5"
import { MdSpaceDashboard } from "react-icons/md"
import { FaPlay } from 'react-icons/fa';
import { useEffect } from "react"
import apiClient from "../../spotify"
import  {useState}  from "react"


// export default function Sidebar() {
//   const [image, setImage] = useState(
//     "https://avatars.githubusercontent.com/u/50865774?s=96&v=4"
//   );

//   useEffect (() =>{
//     apiClient.get("me").then((response) => {
//       setImage(response.data.images[0].url);});
//     },[])


//   return (
//     <div className='sidebar-container'>
//      <img src={image} className="profile-img" alt="profile-image"></img>

// <div>
// <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
// <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
// <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
// <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
// <SidebarButton title="Library" to="/" icon={<IoLibrary/>}/>
// </div>

// <SidebarButton title="sign out" to="" icon={<FaSignOutAlt/>}/>
//     </div>
//   )
// }

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://avatars.githubusercontent.com/u/50865774?s=96&v=4"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
      

    </div>
  );
}
