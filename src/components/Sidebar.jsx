import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[24%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-4" src={assets.home_icon} alt="" />
          <p
            onClick={() => {
              navigate("/");
            }}
            className="font-bold text-xs"
          >
            Home
          </p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-4" src={assets.search_icon} alt="" />
          <p className="font-bold text-xs">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-6" src={assets.stack_icon} alt="" />
            <p className="font-semibold text-s">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-3" src={assets.arrow_icon} alt="" />
            <img className="w-3" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1 className="text-[15px]">Create your first playlist</h1>
          <p className="font-light text-[14px]">it's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[13px] text-black rounded-full mt-4">
            Create playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1 className="text-[15px]">Let's find some podcasts to follow</h1>
          <p className="font-light text-[14px]">
            We will keep you update on new episodes
          </p>
          <button className="px-4 py-1.5 bg-white text-[13px] text-black rounded-full mt-4">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
