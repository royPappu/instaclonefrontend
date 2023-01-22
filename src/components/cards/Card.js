import React, { useState } from "react";
import heart from "../../images/heart.png";
import share from "../../images/share.png";
import more from "../../images/more_icon.svg";
import "./Card.css";
function Card({ post }) {
  //console.log(posts);
  //'http://localhost:5000/public\\images\\1671288920684_DSC04443.JPG'
  const imageurl = "https://instaclone-irfan-backend.onrender.com/";
  //console.log(`${imageurl}${posts.postImage}`);

  //  const [imagepath,setImagePath] = useState("");
  //  setImagePath(process.env.REACT_APP_IMAGE_PATH + post.PostImage)
  return (
    <>
      <section className="card">
        <section className="card-header">
          <div>
            <div className="card-header_name">{post.name}</div>
            <div className="card-header_place">{post.location}</div>
          </div>
          <span>
            <img src={more} alt="more" />
          </span>
        </section>
        <section className="card-image">
          <img className="image" src={`${post.PostImage}`}  alt="" />
        </section>
        <section className="card-actions">
          <span>
            <img src={heart} alt="likes" />
          </span>
          <span>
            <img src={share} alt="" />
          </span>
          <span>{post.date}</span>
        </section>
        <section className="likes">{post.likes} likes</section>
        <section className="description">{post.description}</section>
      </section>
    </>
  );
}

export default Card;
