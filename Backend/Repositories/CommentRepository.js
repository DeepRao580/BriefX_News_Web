import Comment from "../Models/Comment.js";

export const createComment = async (commentData) => {
  return await Comment.create(commentData);
};

export const getCommentsByNewsId = async (newsId) => {
  return await Comment.find({ newsId }).sort({ createdAt: -1 });
};