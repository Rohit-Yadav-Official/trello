import React from "react";
import "./card.css";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";

const Card = ({ image, title, description, avatars, stats ,color}) => {
  return (
    <div className="card">
      {/* Image Section */}
      {image && <img src={image} alt="Artwork" className="card-image" />}


      {/* Tags */}
     
      <div className="tags">
        {color.map((colorName, index) => (
          <span key={index} className={`tag ${colorName}`}></span>
        ))}
      </div>

      {/* Title & Description */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>

      {/* Avatar Section */}
      <div className="card-footer">
        <div className="avatars">
          {avatars.map((avatar, index) => (
            <img key={index} src={avatar} alt={`User${index}`} className="avatar" />
          ))}
          <div className="avatar add-avatar">+</div>
        </div>

        {/* Icons Section */}
        <div className="icons">
          <span>
            <FaRegComment /> {stats.comments}
          </span>
          <span>
            <FaRegHeart /> {stats.hearts}
          </span>
          <span>
            <FaHeart /> {stats.likes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
