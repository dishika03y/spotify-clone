import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex items-center justify-between font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="cursor-pointer w-[30px] p-2 bg-black rounded-2xl"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="cursor-pointer w-[30px] p-2 bg-black rounded-2xl"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black px-4 py-1 rounded-2xl text-[13px] hidden md:block cursor-pointer">
            Explore premium
          </p>
          <p className="bg-black text-white px-3 py-1 rounded-2xl text-[13px] cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-6 h-6 flex items-center cursor-pointer rounded-full justify-center text-[13px]">
            D
          </p>
        </div>
      </div>
      <div className="flex items-center mt-4 gap-1">
        <p className="bg-white text-black px-4 py-1 rounded-2xl text-[13px] font-semibold">
          All
        </p>
        <p className="bg-black text-white px-3 py-1 rounded-2xl text-[13px] cursor-pointer">
          Music
        </p>
        <p className="bg-black text-white px-3 py-1 rounded-2xl text-[13px] cursor-pointer">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
