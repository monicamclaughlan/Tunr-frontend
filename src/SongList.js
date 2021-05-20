import React from "react"; 

const SongList = (props)=>{
    
    //destructure the songs from props
    const { songs } = props

// loading sendss back a div containing articles that show song info if songs have been added
    const loaded = ()=>(
        <div>
            {songs.map((song)=>(
                <article className ="song" key={song.id}>
                    <h2>{song.title}</h2>
                    <h3>{song.time}</h3>
                    <h3>{song.artist}</h3>
                    <h3>{song.favorite}</h3>
                    <button onClick={() => {
                        props.deleteSong(song)
                    }}>
                        Delete
                    </button>
                </article>
            ))}
        </div>
    )
// loading() sends back a blank song template if no songs have been added
    const loading = ()=>(
        <div>
            <article>
                <h2>Song Title</h2>
                <h3>Song PlayTime</h3>
                <h3>Artist</h3>
            </article>
        </div>
    )
   
    return songs.length > 0 ? loaded() : loading()


}
export default SongList