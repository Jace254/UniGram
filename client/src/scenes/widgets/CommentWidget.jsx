import {
  Box, Button, Divider, InputBase, Typography, useTheme
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const CommentWidget = ({ comments, setComments, postId }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const { palette } = useTheme();
  //  const [comments, setComments] = useState([]);
  const getAllComments = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/comments?postId=${postId}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllComments();
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      comment: comment,
      postId: postId,
    };
    axios
      .post(process.env.REACT_APP_SERVER_URL + "/api/comments", data)
      .then((response) => {
        setComments([...comments, response.data]);
        setName("");
        setComment("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      <Divider sx={{ mb: "1rem" }} />
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: "1rem" }}>
          <InputBase
            required
            label="Name"
            placeholder="Name"
            fullWidth
            value={name}
            onChange={handleNameChange}
            sx={{
              width: "30%",
              height: "10%",
              backgroundColor: palette.neutral.light,
              borderRadius: "4px",
              padding: ".5rem .5rem",
              size: "0.7rem",
            }}
          />
          <InputBase
            required
            label="Comment"
            placeholder="Comment"
            fullWidth
            value={comment}
            onChange={handleCommentChange}
            sx={{
              width: "50%",
              height: "10%",
              backgroundColor: palette.neutral.light,
              borderRadius: "4px",
              padding: ".5rem .5rem",
              size: "0.7rem",
              left: "0.3rem",
            }}
          />
          <Button
            onClick={handleSubmit}
            sx={{
              height: "10%",
              color: palette.background.alt,
              backgroundColor: palette.primary.main,
              borderRadius: "4px",
              paddingTop: "10px",
              paddingBottom: "10px",
              left: "1rem",
            }}
          >
            Comment
          </Button>
        </Box>
      </form>
      {comments.map((comment, i) => {
        return (
          <Box key={`${comment.name}-${i}`} mt="1rem">
            <Divider />
            <Typography variant="h5" mt="1rem">
              {comment.name}
            </Typography>
            <Typography variant="body1" mt="0.5rem">
              {comment.comment}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default CommentWidget;
