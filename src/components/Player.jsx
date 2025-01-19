import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    seekBar,
    seekBg,
    play,
    pause,
    playStatus,
    track,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-black flex justify-between items-center px-4 text-white text-[12px]">
      <div className="hidden lg:flex items-center gap-4 ">
        <img className="w-10" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center m-auto gap-1">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt=""
          />
          {playStatus ? (
            <img
              className="w-4 cursor-pointer"
              onClick={pause}
              src={assets.pause_icon}
              alt=""
            />
          ) : (
            <img
              className="w-4 cursor-pointer"
              onClick={play}
              src={assets.play_icon}
              alt=""
            />
          )}
          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt=""
          />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minuite}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="w-0 h-1 border-none bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minuite}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-[15px]" src={assets.play_icon} alt="" />
        <img className="w-[15px]" src={assets.mic_icon} alt="" />
        <img className="w-[15px]" src={assets.queue_icon} alt="" />
        <img className="w-[15px]" src={assets.speaker_icon} alt="" />
        <img className="w-[15px]" src={assets.volume_icon} alt="" />
        <div className="w-[60px] bg-slate-50 rounded h-1"></div>
        <img className="w-[15px]" src={assets.mini_player_icon} alt="" />
        <img className="w-[15px]" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
