import React from "react"



const FavoriteSongs = (props) => {
  //deconstruct songs from props
  const { songs, } = props;

    

  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      <h1>Favorite Songs</h1>
      {songs.map((song) => (
        <article key={song._id}>
          <p>{song.title}</p>
          <p>{song.artist}</p>
          <p>{song.time}</p>
        </article>
      ))}
    </div>
  );

  const loading = () => <h1>No favorites yet.</h1>;

  return songs.length > 0 ? loaded() : loading();
  
};


export default FavoriteSongs;