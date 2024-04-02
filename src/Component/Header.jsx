import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { RiLoginCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logoImage from "../assets/Main.png"; // Import your logo image

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <div className="bg-white py-2 z-10">
        <div className="max-w-[1240px] flex justify-between items-center mx-auto">
          <div className="text-3xl font-bold flex items-center">
            <img
              src={logoImage}
              alt="Logo"
              className="h-20 w-auto responsive"
            />
            <div className="ml-2 text-[#1A1363]">
              STAMINA <br /> FITNESS{" "}
            </div>
          </div>
          {toggle ? (
            <div
              onClick={() => setToggle(!toggle)}
              className="text-black text-2xl mr-10 md:hidden block"
            >
              <IoCloseSharp />
            </div>
          ) : (
            <div
              onClick={() => setToggle(!toggle)}
              className="text-black  mr-10 text-2xl md:hidden block"
            >
              <AiOutlineMenu />
            </div>
          )}

          <ul className="hidden md:flex text-xl font-bold text-[#1A1363] gap-5">
            <li>
              <Link to="/Banner" className=" hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Blog" className=" hover:text-blue-500">
                Plan
              </Link>
            </li>
            <li>
              <Link to="/Card" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/visit" className="hover:text-blue-500">
                Visit
              </Link>
            </li>
            <li>
              <Link to="/Plans" className="hover:text-blue-500">
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="hover:text-blue-500"
                style={{
                  marginTop: -10,
                  backgroundColor: "#FFD700",
                  color: "#1A1363",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              >
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-500">
                <RiLoginCircleFill className="text-3xl" />
              </Link>
            </li>
          </ul>

          {/* Responsive menu */}
          <ul
            className={`duration-300 md:hidden w-full h-screen bg-black fixed text-white top-[68px] p-3 ${
              toggle ? "right-0" : "right-[-100%]"
            }`}
          >
            <li className="p-2">
              <Link to="/home" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li className="p-2">
              <Link to="/company" className="hover:text-blue-500">
                Company
              </Link>
            </li>
            <li className="p-2">
              <Link to="/service" className="hover:text-blue-500">
                Service
              </Link>
            </li>
            <li className="p-2">
              <Link to="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li className="p-2">
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
            <li className="p-2">
              <Link to="/register" className="hover:text-blue-500">
                Register
              </Link>
            </li>
            <li className="p-2">
              <Link to="/login" className="hover:text-blue-500">
                <RiLoginCircleFill className="text-3xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
