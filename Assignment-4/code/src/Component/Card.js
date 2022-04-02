import React from "react";

function Card({name,location,likes,description,PostImage,date}) {
  return (
    <div className="card">
      <nav className="section-nav">
        <div className="ProfileName">
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
        <p className="dots">...</p>
      </nav>
      <img
        className="card-img"
        src={PostImage}
        alt={"Childhood"}
      />
      <div className="Details"> 
        <div className="likeCommentBar">{"\u2661"}</div> 
        <div className="likeCommentBar">{"\u27A2"}</div>
        <div className="Date">{date}</div>
      </div>
      <p className="numberOfLikes">{likes} likes </p>
      <h3>{description}</h3>
    </div>
  )
}

export default Card;
