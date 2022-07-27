import React, {useState} from "react";
import { useAudioList } from "../../context/audioList";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'


const MusicPlayer = () => {
  const {audioList, clearAudioList} = useAudioList();

  console.log('musicPlayer audioList: ', audioList)

  return (
    <div className="playbar w-100">
      <ReactJkMusicPlayer
        glassBg={true}
        theme="dark"
        mode="full"
        drag={true}
        quietUpdate={true}
        clearPriorAudioLists={clearAudioList}
        showDownload={false}
        showThemeSwitch={false}
        audioLists={audioList}
        defaultVolume={0.2} />

    </div>

  )
}

export default MusicPlayer
