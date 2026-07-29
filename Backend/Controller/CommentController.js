import { addComment, getComments } from "../Services/CommentService.js";

export const createComment = async (req, res) => {
  try {
    const { newsId, comment } = req.body;
    const commentData = {
      newsId,
      userId: req.id,
      comment,
    };

    const newComment = await addComment(commentData);
    res.status(201).json({
        success:true,
        message:"Comment added successfully",
        ...newComment
    });
  } catch (error) {
    res.status(400).json({
        success:false,
        message: "Failed to add comment",
    });
  }
};

export const fetchComments = async (req, res) => {
  try {
    const { newsId } = req.params;

    const comments = await getComments(newsId);

    res.status(200).json({
        success:true,
        message:"comment fetched successfully",
        comments
    });
  } catch (error) {
    res.status(500).json({
        success:false,
        message: "Failed to fetch comments",
    });
  }
};