import express from "express";
import { postComment, getComments } from "../controllers/comments.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/comments", getComments);
router.post("/comments", postComment);

export default router;
