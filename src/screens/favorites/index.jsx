import "../../shared/globalStyles.css"
import "./favorites.css"
import React, { useState } from 'react';

export default function Favorites() {
  const [playlists, setPlaylists] = useState({
    list1: [],
    list2: [],
    list3: []
  });
  const [newPlaylist, setNewPlaylist] = useState('');

  const handleAddPlaylist = (listName) => {
    if (newPlaylist.trim() !== '') {
      setPlaylists(prevState => ({
        ...prevState,
        [listName]: [...prevState[listName], newPlaylist]
      }));
      setNewPlaylist('');
    }
  };

  const handleDeletePlaylist = (listName, playlistIndex) => {
    setPlaylists(prevState => ({
      ...prevState,
      [listName]: prevState[listName].filter((_, index) => index !== playlistIndex)
    }));
  };

  return (
    <div className="screen-container">
      <h2>List 1</h2>
      <ul className="playlist-list">
        {playlists.list1.map((playlist, index) => (
          <li key={index} className="playlist-card">
            {playlist}
            <button onClick={() => handleDeletePlaylist('list1', index)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>List 2</h2>
      <ul className="playlist-list">
        {playlists.list2.map((playlist, index) => (
          <li key={index} className="playlist-card">
            {playlist}
            <button onClick={() => handleDeletePlaylist('list2', index)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>List 3</h2>
      <ul className="playlist-list">
        {playlists.list3.map((playlist, index) => (
          <li key={index} className="playlist-card">
            {playlist}
            <button onClick={() => handleDeletePlaylist('list3', index)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={newPlaylist}
          onChange={(e) => setNewPlaylist(e.target.value)}
        />
        <button onClick={() => handleAddPlaylist('list1')}>Add to List 1</button>
        <button onClick={() => handleAddPlaylist('list2')}>Add to List 2</button>
        <button onClick={() => handleAddPlaylist('list3')}>Add to List 3</button>
      </div>
    </div>
  );
}
