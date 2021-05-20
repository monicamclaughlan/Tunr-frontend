import "./App.css";
import React, { useState } from "react";
import FavoriteSongs from "./FavoriteSongs";
import AddSong from "./AddSong";
import SongList from "./SongList";

function App() {
  const emptySong = {
    title: "",
    artist: "",
    time: "",
    favorite: false,
  };
  const [songs, setSongs] = useState([emptySong]);

  return (
    <div className="App">
      <SongList songs={songs} />
      <FavoriteSongs songs={songs} />
      {/* <AddSong songs={songs} label="create" /> */}
    </div>
  );
}

export default App;
