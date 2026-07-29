import express from "express";
import protect from "../middleware/authMiddleware.js";
import {createComment,fetchComments,} from "../controller/commentController.js";

const router = express.Router();

router.post("/addcomment", protect, createComment);

router.get("/:newsId", fetchComments);

export default router;