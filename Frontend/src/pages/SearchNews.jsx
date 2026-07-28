import React from "react";
import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import useDebounce from "../Hook/useDebounce";
import Store from "../store/Store";

function SearchNews() {
  const [loading, setLoading] = useState(true);
  const [allRecentNews, setAllRecentNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(searchTerm, 500);
  const { lang } = Store();

  useEffect(() => {
    const fetchRecentNews = async () => {
      if (searchTerm.trim() === "") {
        setAllRecentNews([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const response = await fetch(
          `https://api.currentsapi.services/v1/search?keywords=${encodeURIComponent(
            debouncedValue
          )}&language=${lang}&country=IN&page_size=20`,
          {
            headers: {
              Authorization: import.meta.env.VITE_CURRENTS_API_KEY,
            },
          }
        );

        const data = await response.json();
        console.log(data.news);
        setAllRecentNews(data.news || []);
      } catch (error) {
        console.error("Error in fetching recent news", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentNews();
  }, [debouncedValue, lang]);

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
          📰 Search News
        </h1>
      </div>

      <input
        type="text"
        placeholder="Search for news..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mx-auto mb-8 block w-[95%] max-w-2xl rounded-2xl border-2 border-gray-300 bg-white px-4 py-3 text-base font-medium text-gray-800 shadow-lg outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 sm:mb-10 sm:w-[90%] sm:px-5 sm:py-4 sm:text-lg lg:mb-16 lg:px-6"
      />

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

export default SearchNews;