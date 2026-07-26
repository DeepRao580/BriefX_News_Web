import React from "react";
import NewsCard from "../components/NewsCard";
import Store from "../store/Store.js";

function Bookmark() {
  const { bookmarks } = Store()
  console.log(bookmarks)

  return (
    <div className="min-h-screen px-6 py-10">
      <div className="text-4xl font-bold text-center text-gray-800 mb-10">
        📑 Bookmarks
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {bookmarks.map((booked) => {
          return <NewsCard singleNews={booked} />;
        })}
      </div>
    </div>
  );
}

export default Bookmark;