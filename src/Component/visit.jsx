import React, { useState, useEffect } from "react";
import Mapp from "../assets/Map.png";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import backgroundImage from "../assets/background.jpg";
import "./Visit.css"; // Import CSS file for styling

export default function Visit() {
  const [activeIcon, setActiveIcon] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    // Delay the showing of the image by 500ms
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 500);

    // Delay the showing of the card by 1000ms
    const cardTimeout = setTimeout(() => {
      setShowCard(true);
    }, 1000);

    // Clear the timeouts when component unmounts
    return () => {
      clearTimeout(timeout);
      clearTimeout(cardTimeout);
    };
  }, []);

  return (
    <div className="bg-slate-600 h-screen relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="p-6 md:p-10">
        <h1 className=" font-bold text-5xl text-center text-black mb-4">
          Visit Our Gym
        </h1>
      </div>
      <div className={`flex flex-col md:flex-row justify-center items-center ${showImage ? "show" : ""}`}>
        <div className="flex justify-center md:justify-end mb-6 md:mb-0">
          <img src={Mapp} alt="Mapp" className="h-[250px] md:h-[450px] animated-image" />
        </div>
        <div
          className={`bg-gray-600 p-6 md:p-8 w-full md:w-1/2 ${showCard ? "show" : ""}`}
          style={{
            borderRadius: "0  0 40px 0 ",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
            color: "white",
            textAlign: "center",
          }}
        >
          <h1>
            <span className="font-extrabold text-yellow-500">Address:</span>{" "}
            12TH ST. GENERAL MATHA VILLAMOR AIR BASE PASAY CITY
          </h1>
          <h1>
            <span className="font-extrabold text-yellow-500">Email:</span>{" "}
            Martell008@gmail.com
          </h1>
          <h1>
            <span className="font-extrabold text-yellow-500">Contact No. :</span>{" "}
            +91 ##########
          </h1>
          <br />
          <h1>
            <span className="font-extrabold  text-xl text-orange-500">
              OUR SOCIAL-MEDIA :
            </span>
          </h1>
          <FaFacebookSquare
            className={`text-3xl inline-block  mr-3 ${
              activeIcon === "facebook" ? "text-blue-500" : ""
            }`}
            onClick={() => setActiveIcon("facebook")}
          />
          <CiInstagram
            className={`text-3xl inline-block mr-3 ${
              activeIcon === "instagram" ? "text-blue-500" : ""
            }`}
            onClick={() => setActiveIcon("instagram")}
          />
          <FaTelegram
            className={`text-3xl inline-block ${
              activeIcon === "telegram" ? "text-blue-500" : ""
            }`}
            onClick={() => setActiveIcon("telegram")}
          />
        </div>
      </div>
    </div>
  );
}
