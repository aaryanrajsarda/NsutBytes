import { Avatar, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Post.css";
import firebase from "firebase";
import ReactPlayer from 'react-player';
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import { ImageSearch } from "@material-ui/icons";
function Post({ postId, profilePic, images, username, timestamp, message,video }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [{ user }] = useStateValue();

  console.log(images);
  console.log(video);
  

  

    const body2 = (
      <>
      </>
    )
    
  

  const body = (
    <>
    {
      
      <div id={postId} className="carousel slide" data-ride="carousel" data-interval="false">
      <ol className="carousel-indicators">
        {images?.map( (image,index) => {
        return (
            <li data-target={`#${postId}`} data-slide-to="0" className={`${index===0?('active'):("")} `}></li>
        )
      })}
      {video !== undefined ? (<li data-target={`#${postId}`} data-slide-to={`${images?.length}`}></li>):("")}
      
      </ol>
      <div className="carousel-inner">
      {images?.map( (image,index) => {
      return (
          <div className = {`carousel-item col-8 offset-2 ${index===0?('active'):("")} `}>
          <img style={{height:"250px",objectFit:"contain"}} src={image} className="d-block w-100" alt="..." />
          </div>
      )
    })}  
      {video !==undefined ? (
        <>
          <div className="carousel-item col-8 offset-2">
        <ReactPlayer
                    url={video}
                    width="250px"
                    // height="100%"
                    style={{height:"250px",objectFit:"contain" }}
                    controls={true}
                    className="d-block w-100"
                  />
        </div>
        </>
      ): ("") }
      </div>
      <a className="carousel-control-prev" href={`#${postId}`} role="button" data-slide="prev">
        <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href={`#${postId}`} role="button" data-slide="next">
        <span className="carousel-control-next-icon bg-dark text-danger" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    }
    </>
    
  );
  // useEffect(() => {
  //   if (postId) {
  //     db.collection("home")
  //       .doc(postId)
  //       .collection("comments")
  //       .orderBy("timestamp", "desc")
  //       .onSnapshot((snapshot) => {
  //         setComments(snapshot.docs.map((doc) => doc.data()));
  //       });
  //   }
  // }, [postId]);

  // const postComment = (event) => {
  //   event.preventDefault();

  //   db.collection("home").doc(postId).collection("comments").add({
  //     text: comment,
  //     username: user?.displayName,
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //   });
  //   setComment("");
  // };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" alt="Profile Pic" />
        <div className="post__topInfo">
          <h3 style={{ margin: "0" }}>{username}</h3>
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
          <p>timestamp....</p>
        </div>
      </div>
      <div className="post__bottom">
        <p style={{ overflowWrap: "anywhere" }}>{message}</p>
      </div>
      {/* <div className="post__image">
        <img src={image} alt="" />
      </div> */}
      {/* Carousel */}
      
      {images.length===0 ? (body2): (body) }







      <div className="post__options">
        {/* <div className="post__option">
          <ThumbUp />
          <p>..1..</p>
        </div> */}
        {/* <form className="post__commentBox">
          <input
            className="post__input"
            type="text"
            placeholder="Add a comment.."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            style={{ justifyContent: "end" }}
            className="post__button"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            Post
          </Button>
        </form> */}
        {/* <div className="post__comments">
          {!comments
            ? ""
            : comments.map((comment) => {
                return (
                  <div className="comment__div">
                    <Avatar src={comment.url} alt="" />
                    <p>
                      <strong>{comment.username}</strong> {comment.text}
                    </p>
                  </div>
                );
              })}
        </div> */}
      </div>
    </div>
  );
}

export default Post;
