import { createComment, getCommentsByNewsId } from "../Repositories/CommentRepository.js";

export const addComment = async (commentData) => {
  return await createComment(commentData);
};

export const getComments = async (newsId) => {
  return await getCommentsByNewsId(newsId);
};