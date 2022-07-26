import React, {useState} from "react";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'


const MusicPlayer = () => {

  const [audioInstance, setAudioInstance] = useState(null)
  const audioList = [{
    // musicSrc:
    // "http://ear-fruit-bucket.s3.amazonaws.com/71d56cdb9c164e29863e32da5dc4e7c0.mp3"

  }]
  return (
    <div className="playbar w-100">
      <ReactJkMusicPlayer
        theme="dark"
        drag={false}
        showThemeSwitch={false}
        audioLists={audioList}/>
    </div>

  )
}

export default MusicPlayer
