import React from "react";

function Card({name,location,likes,description,PostImage,date}) {
  return (
    <div className="card">
      <nav className="section-nav">
        <div className="profileName">
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
        <div className="likeCommentBar"> 
          <div>{"\u2661"}</div> 
          <div>{"\u27A2"}</div>
        </div>
        <div className="Date" style={{marginRight:'10px'}}>{date}</div>
      </div>
      <p className="numberOfLikes" style={{marginLeft:'10px'}}>{likes} likes </p>
      <h3 className="describe" >{description}</h3>
    </div>
  )
}

export default Card;
