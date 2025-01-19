import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const audioref = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minuite: 0,
    },
    totalTime: {
      second: 0,
      minuite: 0,
    },
  });

  const play = () => {
    audioref.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioref.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    try {
      const selectedTrack = songsData[id];
      if (!selectedTrack || !selectedTrack.file) {
        console.error("Track audio source not found");
        return;
      }
      setTrack(selectedTrack);
      audioref.current.oncanplay = async () => {
        await audioref.current.play();
        setPlayStatus(true);
      };
    } catch (err) {
      console.error("Error playing track:", err.message);
    }
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioref.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioref.current.play();
      setPlayStatus(true);
    }
  };

  const seekSong = async (e) => {
    audioref.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioref.current.duration;
  };

  const contextValue = {
    audioref,
    track,
    setTrack,
    seekBar,
    seekBg,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  useEffect(() => {
    setTimeout(() => {
      audioref.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioref.current.currentTime / audioref.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioref.current.currentTime % 60),
            minuite: Math.floor(audioref.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioref.current.duration % 60),
            minuite: Math.floor(audioref.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioref]);

  useEffect(() => {
    audioref.current.onended = () => {
      const currentIndex = songsData.findIndex((song) => song === track);
      const nextIndex = (currentIndex + 1) % songsData.length;
      playWithId(nextIndex);
    };
  }, [track]);
  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};
