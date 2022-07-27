import { createContext, useState, useContext } from "react";

export const AudioListContext = createContext();

export default function AudioListProvider(props) {
  const [audioList, setAudioList] = useState([]);

  return (
    <AudioListContext.Provider
      value={{
        audioList,
        setAudioList
      }}
      >
        {props.children}
      </AudioListContext.Provider>
  )
}

export const useAudioList = () => {
  return useContext(AudioListContext)
}
