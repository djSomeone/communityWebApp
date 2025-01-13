import React from "react";
import Comment from "../comment/comment";
import "./post.css";
import { Icon } from "@iconify/react/dist/iconify.js";


const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-profile">
          <div className="post-profile-img">

          </div>
          <div className="profile-name-lastseen">

        <div style={{fontSize:"1.2rem",fontWeight:"600",verticalAlign:"center"}}>John Doe</div>
          <span>2 hours ago</span>
          </div>
         </div>
        
        
      </div>
      <p className="post-content">
        Just finished working on an exciting new project! Can't wait to share more details with  finished working on an exciting new project!
        everyone. #innovation #technology
      </p>
      <div className="post-img">

      </div>
      <div className="post-actions">
      <button className="action-button">
        <Icon icon="mdi:thumb-up-outline" className="action-icon" />
        Like
      </button>
      <button className="action-button">
        <Icon icon="mdi:comment-outline" className="action-icon" />
        Comment
      </button>
      <button className="action-button">
        <Icon icon="mdi:share-variant" className="action-icon" />
        Share
      </button>
    </div>
    <div className="comment-input">
          <input className="comment-feild" type="text" placeholder="Write a comment..." />
          <button>Send</button>
        </div>
      <div className="comments-section">
        <Comment author="Alice Smith" time="1 hour ago" text="This sounds amazing! Looking forward to seeing the project unfold." />
        <Comment author="Bob Johnson" time="45 minutes ago" text="Can't wait to learn more! Keep up the great work!" />
        
      </div>
    </div>
  );
};

export default Post;
