import React from "react";
import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

function BusinessNews() {
  const [loading, setLoading] = useState(true);
  const [allRecentNews, setAllRecentNews] = useState(null);

  useEffect(() => {
    const fetchRecentNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
        "https://api.currentsapi.services/v1/search?keywords=business&language=en&country=IN&page_size=20",
          {
            headers: {
              Authorization:
                import.meta.env.VITE_CURRENTS_API_KEY,
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
  }, []);

  if (loading) return "Loading...";

return (
  <div className="min-h-screen mt-20 bg-slate-50">

    <div className="mb-16 text-center">
      <h1 className="text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
        📰 Business News
      </h1>

    </div>

    <div className="mx-auto w-full max-w-[1800px] px-6">

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">

        {allRecentNews.map((singleNews, index) => (
          <NewsCard key={index} singleNews={singleNews} />
        ))}

      </div>

    </div>

  </div>
);
}

export default BusinessNews;