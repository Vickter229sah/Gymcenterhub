// Banner.js

import React, { useEffect, useState } from "react";
import laptops from "../assets/bod.png";
import backgroundImage from "../assets/back.png";
import "./Banner.css";

export default function Banner() {
  const [loaded, setLoaded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768); // Assuming small size is 768px or less

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`  bg-cover  bg-center h-screen flex flex-col md:flex-row banner-images ${loaded ? "loaded" : ""}`} style={{backgroundImage: isSmallScreen ? "none" : `url(${backgroundImage})`}}>
      <div className="max-w-[1240px] mx-auto py-4 flex flex-col md:flex-row md:justify-between">
        <div className="text-left md:text-center mt-[50%] ml-[40px] mb-4 md:mb-0">
          <h1 className="font-bold text-3xl md:text-6xl text-black md:text-white banner-text">
            Start a better <br/> 
            <span className="text-yellow-600">Shape of you!</span>
            <br/>
            <span className="text-yellow-600">Come Join Us!</span>
          </h1>
          <button className="bg-yellow-400 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-black font-bold rounded-full shadow-md mt-3 px-5 py-2">
            Get Started
          </button>
        </div>
      </div>
      <div className="max-w-[1240px]  md:mt-[4%] mx-auto relative">
        <img
          src={laptops}
          alt="laptop"
          className="h-auto md:h-[562px] relative z-0 mt-5 md:max-w-none"
        />
      </div>
    </div>
  );
}
