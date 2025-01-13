import React from "react";
import "./comment.css";

const Comment = ({ author, time, text }) => {
  return (
    <div className="comment">
      <h5>{author}</h5>
      <span>{time}</span>
      <p>{text}</p>
    </div>
  );
};

export default Comment;
