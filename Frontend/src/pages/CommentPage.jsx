import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Store from "../store/Store";
import useAuthStore from "../store/useAuthStore";

function Comment() {
  const { comments } = Store();

  return (
    <div className="min-h-screen px-16 py-16">
      <h1 className="text-5xl font-bold text-center mb-12">
        📑 Comments Page
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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
        "http://localhost:5000/api/comments/addcomment",
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
    <div>
      <NewsCard singleNews={news} />

      <div className="mt-5 border rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">💬 Comments</h2>

        {allComments.length > 0 ? (
          allComments.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 text-black rounded-lg p-3 mb-2"
            >
              {item.comment}
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}

        <div className="flex gap-2 mt-4">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 border rounded-lg p-2"
          />

          <button
            onClick={handleComment}
            className="bg-blue-600 text-white px-4 rounded-lg"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;