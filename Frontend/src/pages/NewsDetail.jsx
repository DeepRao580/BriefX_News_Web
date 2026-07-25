import React from "react"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

function NewsDetail(){

    const newsDetail = ()=>{
        const[news,setNews]=useState(null)
        const[loading,setLoading]=useState(true)
        const {articleId}=useParams()

        useEffect(()=>{
            const fetchBookDetail=async()=>{
                try {
                const response= await fetch(`https://v3-api.newscatcherapi.com/api/search_by_link?ids=${articleId}`)
                const data= await response.json()

                console.log(data)
                setNews(data)
                } catch (error) {
                    console.error("NewsDetail.jsx", " :: NewsDetail() :: Error ❌ : ", error);
                } finally{
                    setLoading(false)
                }
            }
            fetchBookDetail()
        },[articleId])
    }

    return(
        <div>
            <div>NewsDetail</div>
            <div>
            <img src={news.image} alt="news related image" style={{objectFit:"cover"}} height="200"/>
            <p>  <span style={{fontWeight:"bolder"}}>Title:</span> {book.volumeInfo?.title}</p>
            <p><span style={{fontWeight:"bolder"}}>Authors: </span>{book.volumeInfo?.authors.join(", ")}</p>
            <p>{book.volumeInfo?.description}</p>
            <button onClick={()=>addFavorite(book)}>  ♡Add  </button>

        <Link to="/books">Go to All Books </Link>

            </div>
        </div>
    )
}
export default NewsDetail