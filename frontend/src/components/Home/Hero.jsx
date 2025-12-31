import React from "react";

export const Hero = () => {
  return (
    <div className="w-full flex justify-around items-center border-1">
      <div className="left-div w-[50%] flex flex-col items-center justify-center">
        <div className="">
          <div className="flex items-center gap-2">
            <hr className="w-8 border-1" />
            <h1 className="font-semibold">OUR BESTSELLERS</h1>
          </div>
          <h1 className="text-5xl font-semibold mt-5">Latest Arrivals</h1>
          <div className="flex items-center gap-2">
            <h1 className="mt-5 font-semibold">SHOP NOW</h1>
            <hr className="w-8 mt-5 border-1" />
          </div>
        </div>
      </div>
      <div className="right-div w-[50%] flex flex-col items-center justify-center">
        <img
          className="w-[50vw] h-[70vh]"
          src="https://foreverbuy.in/assets/hero_img-DOCOb6wn.png"
          alt=""
        />
      </div>
    </div>
  );
};
