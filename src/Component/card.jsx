import React from "react";
import laptop from "../assets/table.jpg";
import "./Card.css"; // Import your CSS file where you define animations

export default function Card() {
  return (
    <div className="  w-full h-[900px] flex flex-col items-center justify-center">
      <div className="text-black text-center p-10 mt-[-15%] font-bold">
        <p>About</p>
        <h1 className="text-3xl">STAMINA GYM FOR MEN & WOMEN</h1>
      </div>

      <div className="max-w-[1240px] mt-10 flex justify-center gap-4">
        {/* Image */}
        <div className="image-container">
          <img
            src={laptop}
            alt="laptop"
            className="image"
          />
        </div>

        {/* Cards */}
        <div className="text-balance  ">
          <p className="ml-[6%] mt-[10%]  text-orange-400">
            Stamina Gym Fitness Center provides proper training and conditioning <br/>
            for members who want to improve and transform 
          </p>
          <br />
          
          <h2 className="ml-[6%] font-bold text-white text-2xl">WHAT WE OFFER:</h2>
          
          <div className="grid grid-cols-1 m-10 h-40 md:grid-cols-3 gap-9">
            {/* First Card */}
            <div className="card-container">
              <div className="bg-orange-600 rounded-xl transition duration-300 hover:bg-white hover:text-black ring-2 ring-orange-600 card">
                <div className="p-8">
                  <h2 className="text-4xl font-bold">24 / 7</h2>
                  <p>CHAT</p>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="card-container">
              <div className="bg-orange-600 rounded-xl transition duration-300 hover:bg-white hover:text-black ring-2 ring-orange-600 card">
                <div className="p-8">
                <h2 className="text-4xl font-bold">PLAN</h2>
                  <p>NUTRITION GUIDE</p>
                  
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="card-container">
              <div className="bg-orange-600 rounded-xl transition duration-300 hover:bg-white hover:text-black ring-2 ring-orange-600 card">
                <div className="p-8">
                <h2 className="text-4xl font-bold">1 on 1</h2>
                  <p>COACHING</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
