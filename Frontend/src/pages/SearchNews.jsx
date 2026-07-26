import React from "react";
import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import useDebounce from "../Hook/useDebounce";

function SearchNews() {
  const [loading, setLoading] = useState(true);
  const [allRecentNews, setAllRecentNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue=useDebounce(searchTerm,500)

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
          )}&language=en&country=IN&page_size=20`,
          {
            headers: {
              Authorization:
                import.meta.env.VITE_CURRENTS_API_KEY,
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
  }, [debouncedValue]);

  if (loading) return <h1 className="mt-20 text-center text-3xl font-bold">Loading...</h1>;

  return (
    <div className="min-h-screen mt-20">
      <div className="mb-14 text-center text-5xl font-extrabold tracking-tight md:text-6xl">
        📰 Search News
      </div>

      <input
        type="text"
        placeholder="Search for news..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mx-auto mb-16 block w-[90%] max-w-2xl rounded-2xl border-2 border-gray-300 bg-white px-6 py-4 text-lg font-medium text-gray-800 shadow-lg outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
      />

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

export default SearchNews;