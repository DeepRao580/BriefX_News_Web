import React from "react";
import { Link } from "react-router-dom";
import Store from "../store/Store.js";
function NewsCard({ singleNews }) {

  const { bookmarks,addBookmark,removeBookmark }=Store();

  const isBooked=bookmarks.some((booked)=>booked.id===singleNews.id)

  return (
    <div className="group mx-auto w-full max-w-\[560px] overflow-hidden rounded-\[32px] bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] ring-1 ring-gray-200 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_70px_rgba(59,130,246,0.25)]">
      
      <img
        src={singleNews.image}
        alt="News-image"
        className="h-\[330px] w-full rounded-2xl object-cover object-center transition-all duration-700 group-hover:scale-105"
      />

      <p className="mt-7 text-center text-sm font-semibold uppercase tracking-[3px] text-gray-500">
        {singleNews.published}
      </p>

      <p className="mx-auto mt-6 max-w-[92%] text-center text-[30px] font-extrabold leading-\[42px] tracking-tight text-slate-900 transition-all duration-300 group-hover:text-blue-600 line-clamp-3">
        {singleNews.title}
      </p>

      <div className="flex justify-start items-center gap-6">
        <button className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
        onClick={()=>{isBooked?removeBookmark(singleNews.id):addBookmark(singleNews)}} >
        📌Bookmark
        </button>
        <span className="text-6xl transition-transform duration-300 hover:scale-125">
          {isBooked ? "📌" : "📍"}
        </span>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
           to={`/searchnews/${encodeURIComponent(singleNews.id)}`}
          className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
        >
          Read More →
        </Link>
      </div>

    </div>
  );
}

export default NewsCard;