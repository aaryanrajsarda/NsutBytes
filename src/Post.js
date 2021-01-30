import { Avatar } from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";
import React from "react";
import "./Post.css";

function Post({ profilePic, image, user, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" alt="Profile Pic" />
        <div className="post__topInfo">
          <h3>{user}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUp />
          <p>Like</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
