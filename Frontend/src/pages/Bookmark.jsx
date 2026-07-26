import React from "react";
import NewsCard from "../components/NewsCard";
import Store from "../store/Store.js";

function Bookmark() {
  const { bookmarks } = Store();

  return (
    <div className="min-h-screen px-16 md:px-24 xl:px-40 py-16">
      <div className="mb-16 text-center text-6xl font-extrabold tracking-tight">
        📑 Bookmarks
      </div>

      <div className="mx-auto max-w-[1900px] grid grid-cols-1 place-items-center gap-x-24 gap-y-24 lg:grid-cols-2">
        {bookmarks.map((booked) => {
          return <NewsCard key={booked.id} singleNews={booked} />;
        })}
      </div>
    </div>
  );
}

export default Bookmark;