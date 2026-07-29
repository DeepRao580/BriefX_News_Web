import React from "react";
import BriefX from "../assets/BriefX_crop.png";
import Playstore from "../assets/google-playstore-icon.svg";
import AppleStore from "../assets/apple-store-icon.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
function Footer() {
  return (
    <>
      <footer className="border-t border-gray-300 py-6 m-20">

        <div className="max-w-8xl mx-auto px-3 flex items-center justify-between">
          <div className="flex items-center">
            <img src={BriefX} alt="BriefX" className="h-30 mx-2"/>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.mobstac.thehindu">
                <img src={Playstore} alt="Google Play" className="h-10 hover:scale-105 transition" />
              </a>

              <a href="https://apps.apple.com/in/app/the-hindu-india-world-news/id771672321">
                <img src={AppleStore} alt="App Store" className="h-10 hover:scale-105 transition"/>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a href="#" className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
                    <i className="fa-brands fa-whatsapp text-2xl"></i>
                </a>
                <a href="#" className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
                    <i className="fa-brands fa-x-twitter text-2xl"></i>
                </a>
                <a href="#" className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
                    <i className="fa-brands fa-facebook text-2xl"></i>
                </a>
                <a href="#" className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
                    <i className="fa-brands fa-instagram text-2xl"></i>
                </a>
                <a href="#" className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
                    <i className="fa-brands fa-linkedin text-2xl"></i>
                </a>
                <a href="#" className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
                    <i className="fa-brands fa-youtube text-2xl"></i>
                </a>
                <a href="#" className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
                    <i className="fa-brands fa-spotify text-2xl"></i>
                </a>
                <a href="#" className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
                    <i className="fa-solid fa-paper-plane text-2xl"></i>
                </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-2 text-sm md:text-lg font-medium">
                <p className="hover:underline">TERMS OF USE</p>
                <span>/</span>
                <p className="hover:underline">PRIVACY POLICY</p>
                <span>/</span>
            </div>
            <p className="mt-6 text-center md:text-left text-sm md:text-lg">
                Copyright © 2026, THG PUBLISHING PVT LTD. or its affiliated companies.
                All rights reserved.
            </p>
        </div>

      </footer>
    </>
  );
}

export default Footer;