import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Store from "../store/Store";
import useAuthStore from "../store/useAuthStore";

function Comment() {
  const { comments } = Store();

  return (
  <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16">
    <h1 className="mb-8 sm:mb-12 text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
      📑 Comments Page
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {comments.map((news) => (
        <CommentCard key={news.id} news={news} />
      ))}
    </div>
  </div>
);
}

function CommentCard({ news }) {
  const [allComments, setAllComments] = useState([]);
  const [comment, setComment] = useState("");

  const { token } = useAuthStore();

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/comments/${news.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      console.log(data);

      setAllComments(data.comments || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleComment = async () => {
    if (!comment.trim()) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/comments/addcomment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            newsId: news.id,
            comment,
          }),
        }
      );

      const data = await response.json();

      console.log(response.status);
      console.log(data);

      if (response.ok) {
        setComment("");
        fetchComments();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div className="w-full">
    <NewsCard singleNews={news} />

    <div className="mt-5 rounded-xl border p-4 sm:p-5">
      <h2 className="mb-4 text-lg sm:text-xl font-bold">
        💬 Comments
      </h2>

      <div className="max-h-64 overflow-y-auto">
        {allComments.length > 0 ? (
          allComments.map((item, index) => (
            <div
              key={index}
              className="mb-2 rounded-lg bg-gray-100 p-3 text-sm sm:text-base text-black .break-words"
            >
              {item.comment}
            </div>
          ))
        ) : (
          <p className="text-sm sm:text-base">
            No comments yet.
          </p>
        )}
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 rounded-lg border p-3"
        />

        <button
          onClick={handleComment}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition w-full sm:w-auto"
        >
          Post
        </button>
      </div>
    </div>
  </div>
);
}

export default Comment;