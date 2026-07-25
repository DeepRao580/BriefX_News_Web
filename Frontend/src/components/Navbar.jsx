import React, { useEffect, useState } from "react";
import BriefX from "../assets/BriefX_crop.png";

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
                            <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
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
                    </ul>
                </div>
                
            </div>
            <div>
            </div>
        </div>
    )
}
export default Navbar