import React from "react";
import backgroundImage from "../assets/background.jpg"; // Import your background image
import "./Blog.css"; // Import CSS file for animations

export default function Blog() {
  return (
    <div className="bg-[#234E70] h-[620px]" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-[1240px] mr-[-9%] mx-auto py-4 text-center">
        <h1 className="font-bold mt-10 text-3xl underline md:text-4xl">
          JOIN
          <span className="text-yellow-600 underline font-serif">
            {" "}
            OUR MEMBERSHIP...
          </span>
        </h1>
        <br />
        <br />
        <br />
        <h1 className="font-bold  ml-[-110%] p-2 md:text-3xl">
          <span className="text-yellow-100 font-semibold "> OUR PLAN...</span>
        </h1>
      </div>

      <div className="md:grid grid-cols-2 md:grid-cols-5 gap-6 max-w-7xl mx-auto px-4">
        <div className="card card-animation">
          <div className="bg-white text-black mt-[20%] rounded-lg shadow-xl h-[220px] my-4 py-4 px-4 md:p-8 transition duration-300 hover:scale-105">
            <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
              Basic Plan
            </h2>
            <p className="text-sm md:text-base text-wjite-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum tortor lorem, a scelerisque enim fermentum nec.
              <br />
              <span className="">2024-2-23</span>
            </p>
          </div>
        </div>
        <div className="card card-animation">
          <div className="bg-[#3E3E3E] text-white mt-[-10%] rounded-lg shadow-xl h-[220px] my-4 py-4 px-4 md:p-8 transition duration-300 hover:scale-105">
            <h2 className="text-lg md:text-2xl  font-bold mb-2 md:mb-4">
              Standard Plan
            </h2>
            <p className="text-sm md:text-base text-white-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum tortor lorem, a scelerisque enim fermentum nec.
              <br />
              <span className=" ">2024-2-23</span>
            </p>
          </div>
        </div>
        <div className="card card-animation">
          <div className="bg-[#77749B] text-white mt-[20%] rounded-lg h-[220px] shadow-xl my-4 py-4 px-4 md:p-8 transition duration-300 hover:scale-105">
            <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
              Premium Plan
            </h2>
            <p className="text-sm md:text-base text-white-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum tortor lorem, a scelerisque enim fermentum nec.
              <br />
              <span className="">2024-2-23</span>
            </p>
          </div>
        </div>
        <div className="card card-animation">
          <div className="bg-[#332F64]  text-white mt-[-10%] rounded-lg h-[220px]  shadow-xl my-4 py-4 px-4 md:p-8 transition duration-300 hover:scale-105">
            <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
              Premium Plan
            </h2>
            <p className="text-sm md:text-base text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum tortor lorem, a scelerisque enim fermentum nec.
              <br />
              <span className="">2024-2-23</span>
            </p>
          </div>
        </div>
        <div className="card card-animation">
          <div className="bg-[#1A1363] mt-[20%] rounded-lg h-[220px]  shadow-xl my-4 py-4 px-4 md:p-8 transition duration-300 hover:scale-105">
            <h2 className="text-lg md:text-2xl text-white font-bold mb-2 md:mb-4">
              Premium Plan
            </h2>
            <p className="text-sm md:text-base text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum tortor lorem, a scelerisque enim fermentum nec.
              <br />
              <span className="">2024-2-23</span>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <button className="bg-[#1A1363]  text-white  py-2 px-5 m-4 rounded-[200px] hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          See more..
        </button>
      </div>
    </div>
  );
}
