import React from "react";
import { Link } from "react-router-dom";
import Store from "../store/Store.js";

function NewsCard({ singleNews }) {
  const { bookmarks, addBookmark, removeBookmark } = Store();

  const isBooked = bookmarks.some(
    (booked) => booked.id === singleNews?.id
  );

  return (
    <div className="group flex h-\[620px] w-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <img
        src={singleNews.image}
        alt="News-image"
        className="h-\[320px] w-full object-cover"
      />

      <div className="flex flex-1 flex-col px-6 py-5">

        <p className="text-xs font-bold uppercase tracking-[2px] text-blue-600 flex justify-between">
          {singleNews.published}
          <div><a href={singleNews.url} className="text-red-500">More Info</a></div>
        </p>

        <h2 className="mt-3 min-h-\[88px] line-clamp-3 text-[21px] font-bold leading-8 text-slate-900">
          {singleNews.title}
        </h2>

        <div className="mt-auto">

          <div className="mb-5 flex items-center justify-between">

            <button
              className={`cursor-pointer rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                isBooked
                  ? "border border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
                  : "bg-slate-900 text-white hover:bg-blue-600"
              }`}
              onClick={() => {
                isBooked
                  ? removeBookmark(singleNews.id)
                  : addBookmark(singleNews);
              }}
            >
              {isBooked ? "📌 Bookmarked" : "🔖 Bookmark"}
            </button>

            <div className="rounded-full bg-slate-100 p-3 text-2xl">
              {isBooked ? "📌" : "📰"}
            </div>

          </div>

          <Link
            to={`/searchnews/${encodeURIComponent(singleNews.id)}`}
            className="block w-full rounded-xl bg-blue-600 py-3 text-center text-[17px] font-semibold text-white transition-all duration-300 hover:bg-blue-700"
          >
            Read Full Article →
          </Link>
        </div>

      </div>

    </div>
  );
}

export default NewsCard;