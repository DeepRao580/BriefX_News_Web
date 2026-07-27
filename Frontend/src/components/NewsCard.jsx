import React from "react";
import { Link } from "react-router-dom";
import Store from "../store/Store.js";

function NewsCard({ singleNews }) {
  const { bookmarks, addBookmark, removeBookmark } = Store();

  const isBooked = bookmarks.some(
    (booked) => booked.id === singleNews.id
  );

  return (
    <div className="group flex h-[560px] w-full flex-col overflow-hidden rounded-3xl bg-white p-5 shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <img
        src={singleNews.image}
        alt="News-image"
        className="h-64 w-full rounded-2xl object-cover"
      />

      <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[2px] text-gray-500">
        {singleNews.published}
      </p>

      <p className="mt-4 text-center text-2xl font-bold leading-8 text-slate-900 line-clamp-3 min-h-[96px]">
        {singleNews.title}
      </p>

      <div className="mt-auto flex items-center justify-between">
        <button
          className="cursor-pointer rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600"
          onClick={() => {
            isBooked
              ? removeBookmark(singleNews.id)
              : addBookmark(singleNews);
          }}
        >
          {isBooked ? "Bookmarked" : "Bookmark"}
        </button>

        <span className="text-4xl">
          {isBooked ? "📌" : "📍"}
        </span>
      </div>

      <div className="mt-5 flex justify-center">
        <Link
          to={`/searchnews/${encodeURIComponent(singleNews.id)}`}
          className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition duration-300 hover:bg-blue-700"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;