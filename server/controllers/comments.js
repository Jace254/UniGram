import Comment from "../models/Comment.js";

export const postComment = async (req, res) => {
  try {
    const comment = new Comment({
      name: req.body.name,
      comment: req.body.comment,
      postId: req.body.postId,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

export const getComments = async (req, res) => {
  try {
    const postId = req.query.postId;
    const comments = await Comment.find({ postId: postId });
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
