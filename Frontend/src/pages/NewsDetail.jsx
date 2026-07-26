import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Store from "../store/Store.js"

function NewsDetail() {
  const { bookmarks,addBookmark,removeBookmark }=Store();
  const [newsDetail, setNewsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
   const isBooked=bookmarks.some((booked)=>booked.id===newsDetail.id)

  const { id } = useParams();

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://api.currentsapi.services/v1/latest-news?language=en&country=IN&page_size=20",
          {
            headers: {
              Authorization:
                "Bearer 3_GNNVR2Emb8qXiipno9SuqKu7ztJBt6tSYiu84bMrw6ZbM7",
            },
          }
        );

        const result = await response.json();

        const article = result.news.find((item) => item.id === id);

        setNewsDetail(article);
      } catch (error) {
        console.log("Error in fetching details of news", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-3xl font-bold text-gray-700 animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  if (!newsDetail) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-3xl font-bold text-red-500">
          News Not Found
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-16 text-center text-6xl font-extrabold tracking-tight">
        📑 News Details
      </div>
      <img
        src={newsDetail?.image}
        alt="News_Image"
        className="h-\[450px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-[1.02]"
      />

      <p className="mt-8 text-5xl font-extrabold leading-tight">
        {newsDetail?.title}
      </p>

      <p className="mt-8 text-lg leading-9">
        {newsDetail?.description}
      </p>

      <p className="mt-8 w-70  rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
        👤 {newsDetail?.author || "Unknown Author"}
      </p>

      <p className="mt-4 w-70 rounded-full border border-gray-300 bg-gray-100 px-5 py-2 text-sm font-semibold text-gray-700">
        📅 {newsDetail?.published}
      </p>

      <div className="flex justify-start items-center gap-6">
        <button className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-red-900 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
        onClick={()=>{isBooked?removeBookmark(newsDetail.id):addBookmark(newsDetail)}} >
        {isBooked?"bookmarked":"bookmark"}
        </button>
        <span className="text-6xl transition-transform duration-300 hover:scale-125">
          {isBooked ? "📌" : "📍"}
        </span>
      </div>

      <Link
        to="/"
        className="mt-10 block w-fit rounded-xl bg-blue-600 px-7 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default NewsDetail;