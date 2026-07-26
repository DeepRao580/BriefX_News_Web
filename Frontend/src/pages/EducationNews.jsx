import React from "react";
import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

function EducationNews() {
  const [loading, setLoading] = useState(true);
  const [allRecentNews, setAllRecentNews] = useState(null);

  useEffect(() => {
    const fetchRecentNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
         "https://api.currentsapi.services/v1/search?keywords=education&language=en&country=IN&page_size=20",
          {
            headers: {
              Authorization:
                "Bearer 3_GNNVR2Emb8qXiipno9SuqKu7ztJBt6tSYiu84bMrw6ZbM7",
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
    <div className="min-h-screen mt-20">
      <div className="mb-14 text-center text-5xl font-extrabold tracking-tight md:text-6xl">
        📰 Education News
      </div>

      <div className="mx-auto max-w-[1850px] px-12 md:px-24 2xl:px-40">
        <div className="grid grid-cols-1 place-items-center gap-x-24 gap-y-20 lg:grid-cols-2">
          {allRecentNews.map((singleNews, index) => (
            <NewsCard key={index} singleNews={singleNews} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationNews;