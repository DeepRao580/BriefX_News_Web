import express from "express";
import protect from "../middleware/AuthMiddleware.js";
import {createComment,fetchComments,} from "../Controller/CommentController.js";

const router = express.Router();

router.post("/addcomment", protect, createComment);

router.get("/:newsId", fetchComments);

export default router;