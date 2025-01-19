import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];

  const { playWithId, setTrack } = useContext(PlayerContext);

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="rounded w-48" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <div className="mt-1">
            <img
              className="inline-block w-5  "
              src={assets.spotify_logo}
              alt=""
            />
            <b className="ml-2 mr-1">Spotify</b>• 1,323,154 likes •
            <b>50 songs,</b>
            about 2 hr 30 min
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 text-[#a7a7a7] mt-10 mb-4 pl-2">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4 " src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((items, index) => (
        <div
          onClick={() => {
            playWithId(items.id);
          }}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white text-[15px]">
            <b className="text-[#a7a7a7] mr-5">{index + 1}</b>
            <img src={items.image} className="inline w-10 mr-5" alt="" />
            {items.name}
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{items.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
