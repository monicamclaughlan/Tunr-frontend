import './App.css';
import React, {useState} from "react"
import FavoriteSongs from "./FavoriteSongs"
import AddSong from './AddSong'
import SongList from './SongList'

function App() {
const url = "https://songs-329-tunr-backend.herokuapp.com"

  const emptySong = { 
    title: "", 
    artist: "", 
    time: "", 
    favorite: false
  }
  
  const [songs, setSongs] = useState([emptySong])
  const [favoriteSongs, setFavoriteSongs] = useState([])

  // getSongs function 
  const getSongs = () => { 
    fetch(url + '/songs/')
    .then((response) => response.json())
    .then((data) => setSongs(data))
  }

   // when screen loads, get list of all coffees

  // handleCreate - function for when create is submitted
const handleCreate = (newSong) => { 
  fetch(url + '/songs', { 
    method: "POST", 
    headers: { 
      "Content-type": "application/json"
    }, 
    body: JSON.stringify(newSong)
  })
  .then(() => getSongs())
}
// deleteSong to delete individual Songs
const handleDelete = (song) => {
  fetch(url + "/songs/" + song._id, {
    method: "delete",
  
  })
  .then(() => {
    getSongs()
  })
};

  return (
    <div className="App">
      <SongList songs={songs} setFavoriteSongs={setFavoriteSongs} handleSubmit={handleDelete}/>
      <FavoriteSongs songs={songs} favoriteSongs={favoriteSongs}/> 
      {/* <FavoriteSongs songs={[{title:"Purple Rain"}, {artist:"Prince"}, {time:"6:66"}]}/> */}
      <AddSong song={emptySong} label="create" handleSubmit={handleCreate}/>
      
    </div>
  );
}

export default App;