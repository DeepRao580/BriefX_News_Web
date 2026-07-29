import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Store from "../store/Store.js";


function NewsCard({ singleNews }) {
  const {
    bookmarks,
    addBookmark,
    removeBookmark,
    comments,
    addComment,
    removeComment,
    theme,
  } = Store();

  const isBooked = bookmarks.some(
    (booked) => booked.id === singleNews?.id
  );
  const isComment = comments.some(
    (booked) => booked.id === singleNews?.id
  );

  const navigate = useNavigate();

  return (
    <div
      className={`group flex h-auto min-h-\[560px] w-full flex-col overflow-hidden rounded-3xl border shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        theme === "light"
          ? "bg-slate-100 border-gray-200 text-gray-900"
          : "bg-gray-900 border-gray-700 text-grey"
      }`}
    >
      <img
        src={singleNews.image}
        alt="News-image"
        className="h-52 w-full object-cover sm:h-64 md:h-72 lg:h-80"
      />

      <div className="flex flex-1 flex-col p-4 sm:px-5 sm:py-5 md:px-6 md:py-5">
        <div className="flex flex-col gap-2 text-[11px] font-bold uppercase tracking-[1px] text-blue-600 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <span className="wrap-break-words">
            {singleNews.published}
          </span>

          <a
            href={singleNews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            More Info
          </a>
        </div>

        <h2 className="mt-3 min-h-\[72px] text-lg font-bold leading-7 line-clamp-3 sm:min-h-\[80px] sm:text-xl md:min-h-\[88px] md:text-[21px] md:leading-8">
          {singleNews.title}
        </h2>

        <div className="mt-auto">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-3">
              <button
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:py-3 sm:text-sm ${
                  isBooked
                    ? "border border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
                    : "bg-violet-500 text-white hover:bg-violet-700"
                }`}
                onClick={() => {
                  isBooked
                    ? removeBookmark(singleNews.id)
                    : addBookmark(singleNews);
                }}
              >
                {isBooked ? "📌 Bookmarked" : "🔖 Bookmark"}
              </button>

              <button
                onClick={() => {
                  isComment?removeComment(singleNews.id):addComment(singleNews);
                }}
                className="rounded-xl bg-green-600 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-green-700 sm:px-5 sm:py-3 sm:text-sm"
              >
                {isComment?"💬 DeleteComment":"💬 Comment"}
              </button>
            </div>

            <div className="rounded-full p-2 text-xl sm:p-3 sm:text-2xl">
              {isBooked ? "📌" : "📰"}
            </div>
          </div>

          <Link
            to={`/searchnews/${category}/${encodeURIComponent(singleNews.id)}`}
            className="block w-full rounded-xl bg-blue-600 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 sm:py-3 sm:text-[17px]"
          >
            Read Full Article →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;