import React, {useState} from "react";
import { useAudioList } from "../../context/audioList";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'


const MusicPlayer = () => {
  const {audioList, clearAudioList, quietUpdate} = useAudioList();


  return (
    <div className="playbar w-100">
      <ReactJkMusicPlayer
        autoHiddenCover
        glassBg={true}
        theme="dark"
        mode="full"
        drag={true}
        quietUpdate={quietUpdate}
        clearPriorAudioLists={clearAudioList}
        showDownload={false}
        showThemeSwitch={false}
        audioLists={audioList}
        defaultVolume={0.5}
        toggleMode={false}
        autoPlayInitLoadPlayList={true}
        />
    </div>

  )
}

export default MusicPlayer
