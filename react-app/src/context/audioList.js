import { createContext, useState, useContext } from "react";

export const AudioListContext = createContext();

export default function AudioListProvider(props) {
  const [audioList, setAudioList] = useState([]);
  const [audioIndex, setAudioIndex] = useState(0);
  const [clearAudioList, setClearAudioList] = useState(false)
  const [quiteUpdate, setQuietUpdate] = useState(true)

  return (
    <AudioListContext.Provider
      value={{
        audioList,
        setAudioList,
        audioIndex,
        setAudioIndex,
        clearAudioList,
        setClearAudioList,
        quiteUpdate,
        setQuietUpdate
      }}
      >
        {props.children}
      </AudioListContext.Provider>
  )
}

export const useAudioList = () => {
  return useContext(AudioListContext)
}
