import React from "react"
import { useState,useEffect } from "react"
import NewsCard from "../components/NewsCard"
function Home(){
    const [loading,setLoading]=useState(true)
    const [allRecentNews,setAllRecentNews]=useState(null)

    useEffect(()=>{
        const fetchRecentNews=async ()=>{
            try {
                setLoading(true)
                const response=await fetch("https://gnews.io/api/v4/top-headlines?country=in&lang=en&max=10&apikey=1d7951a556e69ac7a4e553d96a0bbf91")
                const data=await response.json()
                console.log(data.articles)
                setAllRecentNews(data.articles)
            } catch (error) {
                console.error("Error in fetching recent news",error)
            } finally{
                setLoading(false)
            }
        }
        fetchRecentNews()
    },[])

    if(loading) return "Loading..."

    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-[1850px] px-12 md:px-24 2xl:px-40">
                <div className="grid grid-cols-1 place-items-center gap-x-24 gap-y-20 lg:grid-cols-2">
                    {allRecentNews.map((singleNews, index) => (
                        <NewsCard key={index} singleNews={singleNews} />))}
                </div>
            </div>
       </div>
);
}
export default Home

