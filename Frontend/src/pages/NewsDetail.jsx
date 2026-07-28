import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Store from "../store/Store.js"
import { generateNewsSummary } from "../service/groq";


function NewsDetail() {
  const { bookmarks,addBookmark,removeBookmark }=Store();
  const [newsDetail, setNewsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const isBooked=bookmarks.some((booked)=>booked.id===newsDetail?.id)
   const { lang }=Store()


  const [aiSummary, setAiSummary] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.currentsapi.services/v1/latest-news?language=${lang}&country=IN&page_size=20`,
          {
            headers: {
              Authorization:
                import.meta.env.VITE_CURRENTS_API_KEY,
            },
          }
        );

        const result = await response.json();
        console.log(result)
        const article = result.news.find((item) => item.id === id);
        console.log(article)
        setNewsDetail(article);
      } catch (error) {
        console.log("Error in fetching details of news", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id,lang]);

  const generateSummary = async () => {
  try {
    setAiLoading(true);

    const result = await generateNewsSummary(
      newsDetail.title,
      newsDetail.description
    );

    setAiSummary(result);
  } catch (error) {
    console.log(error);
  } finally {
    setAiLoading(false);
  }};


  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-3xl font-bold animate-pulse">
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
  if(newsDetail){
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
        <button className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2 text-md font-semibold text-white transition-all duration-300 hover:bg-blue-600
        "
        onClick={()=>{isBooked?removeBookmark(newsDetail.id):addBookmark(newsDetail)}} >
        {isBooked?"bookmarked 🔖":"bookmark 📑"}
        </button>
      </div>

      <button onClick={generateSummary} disabled={aiLoading} className="mt-6 rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700" >
        {aiLoading ? "Generating..." : "🤖 AI Summary"}
      </button>

      {aiSummary && (
      <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/20 bg-cover bg-center p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
           style={{backgroundImage:"url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80')",}}>
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 to-fuchsia-500 text-3xl shadow-lg">
            🤖
          </div>

          <div>
            <h2 className="text-3xl font-extrabold">
              AI News Explanation
            </h2>
            <p className="text-sm opacity-70">
              Smart summary generated using AI
            </p>
          </div>
        </div>

      <div className="rounded-2xl bg-linear-to-br from-slate-50 to-white p-6 shadow-inner">
        <p className="whitespace-pre-wrap text-lg leading-9">
        {aiSummary}
        </p>
      </div>
      </div>)}

      <Link
        to="/"
        className="mt-10 block w-fit rounded-xl bg-blue-600 px-7 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
      >
        ← Back to Home
      </Link>
      <div><a href={newsDetail.url}>Detail</a></div>
    </div>
  );}
}

export default NewsDetail;
