
import { useEffect, useState } from "react";
import "../../shared/globalStyles.css"
import APIKit from "../../spotify"



export default function Library() {
  const [playlist, setPlaylists] = useState(null);


  useEffect 
APIKit.get('me/playlists').then(function(response) {
  setPlaylists(response.data.items);
})




  return (
    <div className="screen-container">
      {playlists?.map(playlist => {
        <div></div>
      })}
     
      
    </div>
  )
}
