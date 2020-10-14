import React, {useState, useEffect} from "react";
import uuid from 'uuid/v1';
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'titulo de la cancion', id: 1},{ title: 'titulo de la cancion 2', id: 2},{ title: 'titulo de la cancion 3', id: 3}
  ])
  const [age, setAge] = useState(20)
  const addSong = (title) =>{
    setSongs([...songs,{title, id:uuid()}])
  }
  useEffect(()=>{
    console.log("use effect hook", songs);
  },[songs])

useEffect(()=>{
    console.log("use effect hook", age);
  },[age])

  return (
    <div className="song-list">
      <ul>
        {songs.map(song=>{
          return(
            <li key={song.id}>{song.title}</li>
          )
        })}
      </ul>
      <NewSongForm addSong={addSong}/>      
      <button onClick={()=>{setAge(age + 1)}}> Add 1 to age: {age} </button>
    </div>
  );
};

export default SongList;
