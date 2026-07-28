import React from "react";
import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import Store from "../store/Store";

function BusinessNews() {
  const [loading, setLoading] = useState(true);
  const [allRecentNews, setAllRecentNews] = useState(null);
  const { lang } = Store();

  useEffect(() => {
    const fetchRecentNews = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.currentsapi.services/v1/search?keywords=business&language=${lang}&country=IN&page_size=20`,
          {
            headers: {
              Authorization: import.meta.env.VITE_CURRENTS_API_KEY,
            },
          }
        );

        const data = await response.json();
        console.log(data.news);
        setAllRecentNews(data.news);
      } catch (error) {
        console.error("Error in fetching recent news", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentNews();
  }, [lang]);

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center text-lg font-semibold">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen mt-8 sm:mt-10 md:mt-14 lg:mt-20">

      <div className="mb-8 px-4 text-center sm:mb-10 md:mb-12 lg:mb-16">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
          📰 Business News
        </h1>
      </div>

      <div className="mx-auto w-full max-w-[1800px] px-3 sm:px-4 md:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-10">

          {allRecentNews.map((singleNews, index) => (
            <NewsCard key={index} singleNews={singleNews} />
          ))}

        </div>

      </div>

    </div>
  );
}

export default BusinessNews;