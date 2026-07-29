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
        className={`navbar shadow-sm px-8 py-4${
          theme === "light"
            ? "bg-slate-50 border-b border-gray-200"
            : "bg-gray-900 border-b border-gray-700"
        }`}
      >
        <div className="flex-1">
          <span
            className={`font-semibold ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            {currentDate ? currentDate : "Loading..."}
          </span>
        </div>

        <div className="flex-1 flex justify-center h-50">
          <img
            src={BriefX}
            alt="BriefX"
            className="h-70 w-auto object-contain"
          />
        </div>

        <div className="flex-1 flex justify-end items-center gap-4">
          <Link to="/signup" className="btn bg-green-500 text-white hover:bg-green-700">
            Sign Up
          </Link>

          <Link
            to="/login"
            className="btn bg-blue-600 hover:bg-blue-800 text-white"
          >
            Login
          </Link>

          <Link
            to="/logout"
            className="btn bg-red-500 hover:bg-red-700 text-white"
          >
            Logout
          </Link>

          <Link
            to="/profile"
            className="flex h-12 w-12 items-center justify-center rounded-full text-blue-600 hover:text-indigo-700 transition-all duration-300 hover:scale-110"
          >
            <FaUserCircle size={42} />
          </Link>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
            tabIndex="-1"
            className={`menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow ${
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
          </ul>
        </div>
      </div>
            <div style={{ padding: 10 }}>
        <ul
          className={`flex items-center justify-center gap-8 font-medium text-[18px] ${
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
              className="w-5 h-5"
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
              className={`relative transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
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
        className="fixed bottom-22 right-6 z-50 rounded-full bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700 active:scale-95"
      >
        {lang === "en" ? "हिंदी" : "English"}
      </button>

      <button
        onClick={toggleTheme}
        className={`fixed bottom-6 right-6 z-50 rounded-full px-6 py-3 text-lg font-semibold shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 ${
          theme === "light"
            ? "bg-yellow-300 text-black hover:bg-yellow-500"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }`}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>

      <button
        onClick={toggleMusic}
        className={`fixed bottom-38 right-6 z-50 rounded-full px-6 py-3 text-2xl font-semibold shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 ${
          theme === "light"
            ? "bg-violet-400 hover:bg-pink-400 text-black"
            : "bg-violet-700 hover:bg-pink-700 text-white"
        }`}
      >
        {playing ? "⏸️" : "🔊"}
      </button>

      <div className="intro">
        <div className="paper">
          <h1
            className={`${
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