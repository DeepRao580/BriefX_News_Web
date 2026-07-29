import React, { useEffect, useState, useRef } from "react";
import BriefX from "../assets/BriefX_crop4.png";
import { Link } from "react-router-dom";
import Store from "../store/Store.js";
import { FaUserCircle } from "react-icons/fa";
import music from "../assets/music.mp3";
import "./Navbar.css";

function Navbar() {
  const { theme, toggleTheme, lang, toggleLang } = Store();
  const [currentDate, setCurrentDate] = useState(null);

  const audioRef = useRef(new Audio(music));
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    audioRef.current.loop = true;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  useEffect(() => {
    const today = new Date();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const completeDate = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    setCurrentDate(completeDate);
  }, []);

  return (
    <div
      className={`transition-colors duration-300 ${
        theme === "light"
          ? "bg-slate-50 text-gray-900"
          : "bg-gray-900 text-white"
      }`}
    >
      <div
        className={`navbar shadow-sm px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row gap-4 lg:gap-0 ${
          theme === "light"
            ? "bg-slate-50 border-b border-gray-200"
            : "bg-gray-900 border-b border-gray-700"
        }`}
      >
        <div className="flex-1 flex justify-center lg:justify-start order-2 lg:order-1">
          <span
            className={`font-semibold text-sm sm:text-base ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            {currentDate ? currentDate : "Loading..."}
          </span>
        </div>

        <div className="flex-1 flex justify-center order-1 lg:order-2">
          <img
            src={BriefX}
            alt="BriefX"
            className="h-30 sm:h-40 lg:h-62 lg:pr-30 w-auto object-contain "
          />
        </div>

        <div className="flex-1 flex flex-wrap justify-center lg:justify-end items-center gap-2 sm:gap-3 lg:gap-4 order-3">
          <Link
            to="/signup"
            className="btn btn-sm sm:btn-md bg-green-500 text-white hover:bg-green-700"
          >
            Sign Up
          </Link>

          <Link
            to="/login"
            className="btn btn-sm sm:btn-md bg-blue-600 hover:bg-blue-800 text-white"
          >
            Login
          </Link>

          <Link
            to="/logout"
            className="btn btn-sm sm:btn-md bg-red-500 hover:bg-red-700 text-white"
          >
            Logout
          </Link>

          <Link
            to="/profile"
            className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-blue-600 hover:text-indigo-700 transition-all duration-300 hover:scale-110"
          >
            <FaUserCircle size={window.innerWidth < 640 ? 34 : 42} />
          </Link>
        </div>

        <div className="dropdown dropdown-end self-end lg:self-auto">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className={`inline-block h-5 w-5 ${
                theme === "light" ? "stroke-black" : "stroke-white"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
                      </div>

          <ul
            tabIndex={-1}
            className={`menu menu-sm dropdown-content rounded-box z-50 mt-3 w-52 p-2 shadow ${
              theme === "light"
                ? "bg-white text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            <li>
              <Link to="/profile" className="badge font-bold">
                Profile
              </Link>
            </li>

            <li>
              <Link to="/bookmarks" className="badge">
                Bookmarks
              </Link>
            </li>

            <li>
              <Link to="/comment" className="badge">
                Comments Page
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-3 sm:px-5 lg:px-10 py-3 overflow-x-auto">
        <ul
          className={`flex items-center gap-5 lg:justify-center whitespace-nowrap font-medium text-sm sm:text-base lg:text-[18px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          <Link
            to="/searchnews"
            className={`flex items-center gap-2 transition-all duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
              theme === "light"
                ? "hover:text-gray-600 after:bg-black"
                : "hover:text-gray-300 after:bg-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 .flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 5.5 5.5a7.5 7.5 0 0 0 11.15 11.15Z"
              />
            </svg>

            Search
          </Link>

          {[
            { to: "/", label: "Home" },
            { to: "/sportnews", label: "Sports" },
            { to: "/businessnews", label: "Business" },
            { to: "/educationnews", label: "Education" },
            { to: "/entertainmentnews", label: "Entertainment" },
            { to: "/technologyNews", label: "Technology" },
            { to: "/sciencenews", label: "Science" },
            { to: "/healthnews", label: "Health" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full .flex-shrink-0 ${
                theme === "light"
                  ? "hover:text-gray-600 after:bg-black"
                  : "hover:text-gray-300 after:bg-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
      <button
        onClick={toggleLang}
        className="fixed bottom-24 right-4 sm:right-6 z-50 rounded-full bg-blue-500 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700 active:scale-95"
      >
        {lang === "en" ? "हिंदी" : "English"}
      </button>

      <button
        onClick={toggleTheme}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 ${
          theme === "light"
            ? "bg-yellow-300 text-black hover:bg-yellow-500"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }`}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>

      <button
        onClick={toggleMusic}
        className={`fixed bottom-44 right-4 sm:bottom-38 sm:right-6 z-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xl sm:text-2xl font-semibold shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 lg:mb-3 md:mb-3 ${
          theme === "light"
            ? "bg-violet-400 hover:bg-pink-400 text-black"
            : "bg-violet-700 hover:bg-pink-700 text-white"
        }`}
      >
        {playing ? "⏸️" : "🔊"}
      </button>

      <div className="intro px-4">
        <div className="paper">
          <h1
            className={`text-center text-2xl sm:text-4xl lg:text-5xl ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            BREAKING NEWS
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;