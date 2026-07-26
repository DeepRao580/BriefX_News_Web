import React, { useEffect, useState } from "react";
import BriefX from "../assets/BriefX_crop.png";
import { Link } from "react-router-dom";

function Navbar(){

    const[currentDate , setCurrentDate]= useState(null);
    useEffect(()=>{
        const today= new Date();

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const monthName=months[today.getMonth()]
        const date=today.getDate()
        const year=today.getFullYear()

        const completeDate= `${monthName} ${date} , ${year}`

        setCurrentDate(completeDate)
    },[])


    return(
        <div className="bg-white">
            <div className="navbar bg-white shadow-sm flex justify-between">
                <div className="flex">
                    <span className="text-black ">{currentDate? currentDate : "Loading.."}</span>
                </div>
                <div className="flex">
                    <img src={BriefX} alt="BriefX" style={{height: "100px", width: "auto", objectFit: "cover",}}/>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                          <div className="flex-none">
                            <button className="btn btn-square btn-ghost text-black hover:bg-gray-200 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-black"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                            </button>
                            </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                        <li><Link to="/bookmarks">Bookmarks</Link></li>
                    </ul>
                </div>   
            </div>
            <div style={{padding:10}}>
                <ul className="flex items-center justify-center gap-8 font-medium text-black text-[18px]">

                    <Link
                        to="/searchnews"
                        className="flex items-center gap-2 hover:text-gray-600 transition-all duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
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

                    <Link to="/" className="relative hover:text-gray-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                        Home
                    </Link>

                    <Link to="/sportnews" className="relative hover:text-gray-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                        Sports
                    </Link>

                    <Link to="/businessnews" className="relative hover:text-gray-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                        Business
                    </Link>

                    <Link to="/educationnews" className="relative hover:text-gray-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                        Education
                    </Link>

                    <Link to="/entertainmentnews" className="relative hover:text-gray-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                        Entertainment
                    </Link>

                    <Link to="/technologyNews" className="relative hover:text-gray-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                        Technology
                    </Link>

                    <Link to="/sciencenews" className="relative hover:text-gray-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                        Science
                    </Link>

                    <Link to="/healthnews" className="relative hover:text-gray-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                        Health
                    </Link>

                    </ul>
            </div>
        </div>
    )
}
export default Navbar