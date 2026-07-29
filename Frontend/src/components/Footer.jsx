import React from "react";
import BriefX from "../assets/BriefX_crop4.png";
import Playstore from "../assets/google-playstore-icon.svg";
import AppleStore from "../assets/apple-store-icon.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <>
      <footer className="border-t border-gray-300 py-6 mt-10 mx-4 sm:mx-8 lg:mx-20">

        <div className="max-w-8xl mx-auto px-3 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="flex justify-center">
            <img
              src={BriefX}
              alt="BriefX"
              className="h-28 sm:h-40 lg:h-52 w-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.mobstac.thehindu">
              <img
                src={Playstore}
                alt="Google Play"
                className="h-10 sm:h-12 hover:scale-105 transition"
              />
            </a>

            <a href="https://apps.apple.com/in/app/the-hindu-india-world-news/id771672321">
              <img
                src={AppleStore}
                alt="App Store"
                className="h-10 sm:h-12 hover:scale-105 transition"
              />
            </a>
          </div>

        </div>

        <div className="border-t border-gray-300 mt-8 pt-8">

          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <a href="#" className="w-11 h-11 sm:w-12 sm:h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
              <i className="fa-brands fa-whatsapp text-xl sm:text-2xl"></i>
            </a>

            <a href="#" className="w-11 h-11 sm:w-12 sm:h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
              <i className="fa-brands fa-x-twitter text-xl sm:text-2xl"></i>
            </a>

            <a href="#" className="w-11 h-11 sm:w-12 sm:h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
              <i className="fa-brands fa-facebook text-xl sm:text-2xl"></i>
            </a>

            <a href="#" className="w-11 h-11 sm:w-12 sm:h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
              <i className="fa-brands fa-instagram text-xl sm:text-2xl"></i>
            </a>

            <a href="#" className="w-11 h-11 sm:w-12 sm:h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
              <i className="fa-brands fa-linkedin text-xl sm:text-2xl"></i>
            </a>

            <a href="#" className="w-11 h-11 sm:w-12 sm:h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
              <i className="fa-brands fa-youtube text-xl sm:text-2xl"></i>
            </a>

            <a href="#" className="w-11 h-11 sm:w-12 sm:h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
              <i className="fa-brands fa-spotify text-xl sm:text-2xl"></i>
            </a>

            <a href="#" className="w-11 h-11 sm:w-12 sm:h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
              <i className="fa-solid fa-paper-plane text-xl sm:text-2xl"></i>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-2 text-xs sm:text-sm lg:text-lg font-medium text-center">
            <p className="hover:underline cursor-pointer">TERMS OF USE</p>
            <span>/</span>
            <p className="hover:underline cursor-pointer">PRIVACY POLICY</p>
            <span>/</span>
          </div>

          <p className="mt-6 text-center lg:text-left text-xs sm:text-sm lg:text-lg leading-6">
            Copyright © 2026, THG PUBLISHING PVT LTD. or its affiliated
            companies. All rights reserved.
          </p>

        </div>

      </footer>
    </>
  );
}

export default Footer;