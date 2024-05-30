import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({post}) => {
  const { id, title, body } = post;
//   console.log(title)
const navigate = useNavigate()

  const stylePost = {
    border: "3px solid lightgreen",
    borderRadius: "20pageXOffset",
    padding: "20px",
    margin: "10px",
  };

  const handleNavigate = () => {
    navigate(`/posts/${id}`)
  }
  return (
    <div style={stylePost}>
      <h4>{title}</h4>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>Show Details</Link>
      <button onClick={handleNavigate}>Details of: {id}</button>
    </div>
  );
};

export default Post;
