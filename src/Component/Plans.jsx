import React from "react";
import basicImage from "../assets/table.jpg";

import backgroundImage from "../assets/background1.jpg";

export default function Plans() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="h-[620px] w-full" style={containerStyle}>
      <div className="h-full">
        <div className="max-w-[1240px] mx-auto py-4 text-center">
          <h1 className="font-bold text-3xl underline md:text-4xl text-white">
            Our <span className=" text-black underline">Coaches.</span>
          </h1>
          <br />
          <p className="text-white">
            At our gym, we foster a supportive community and provide
            personalized fitness solutions backed by data-driven insights.
            Achieve your fitness goals with confidence as our expert trainers
            guide you towards a stronger, healthier lifestyle, ensuring your gym
            experience is both effective and fulfilling.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="md:grid grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {/* Plan cards */}
          <div className="bg-yellow-600 text-center rounded-xl shadow-xl my-4 py-8 px-6 transform transition duration-300 hover:scale-105 relative overflow-hidden">
            <h2 className="text-2xl p-8 m-8 font-bold mb-4">Henry</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum tortor lorem, a scelerisque enim fermentum nec.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Select Plan
            </button>
          </div>
          <div className="bg-yellow-600 text-center rounded-xl shadow-xl my-4 py-8 px-6 transform transition duration-300 hover:scale-105 relative overflow-hidden">
            <h2 className="text-2xl p-8 m-8 font-bold mb-4">Aarisu </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum tortor lorem, a scelerisque enim fermentum nec.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Select Plan
            </button>
          </div>
          <div className="bg-yellow-600 text-center rounded-xl shadow-xl my-4 py-8 px-6 transform transition duration-300 hover:scale-105 relative overflow-hidden">
            <h2 className="text-2xl p-8 m-8 font-bold mb-4">yelda Plan</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum tortor lorem, a scelerisque enim fermentum nec.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Select Plan
            </button>
          </div>
        </div>
      </div>
      {/* Circular image outside the card */}
      <div className="absolute top-[40%] left-[15%] ">
        <img
          src={basicImage}
          alt="Basic Plan"
          className="w-40 h-40 bg-white object-cover border-black border-2 rounded-full shadow-xl"
        />
      </div>
      <div className="absolute top-[40%] left-[45%] ">
        <img
          src={basicImage}
          alt="Basic Plan"
          className="w-40 h-40 bg-white object-cover border-black border-2 rounded-full shadow-xl"
        />
      </div>
      <div className="absolute top-[40%] left-[74%] ">
        <img
          src={basicImage}
          alt="Basic Plan"
          className="w-40 h-40 bg-white object-cover border-black border-2 rounded-full shadow-xl"
        />
      </div>
    </div>
  );
}
