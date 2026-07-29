import React from "react";
import NewsCard from "../components/NewsCard";
import Store from "../store/Store.js";

function Bookmark() {
  const { bookmarks } = Store();

 return (
  <div className="min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-40 py-8 sm:py-12 lg:py-16">
    
    <div className="mb-8 sm:mb-12 lg:mb-16 text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight">
      📑 Bookmarks
    </div>

    <div className="mx-auto max-w-[1900px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
      {bookmarks.map((booked) => (
        <NewsCard key={booked.id} singleNews={booked} />
      ))}
    </div>

  </div>
);
}

export default Bookmark;