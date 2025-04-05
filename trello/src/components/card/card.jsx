import React from "react";
import "./card.css";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";
const Card = ({
  image,
  title = "",
  description = "",
  members = [],
  comments = 0,
  votes = 0,
  attachments = 0,
  labels = [],
}) => {
  return (
    <div className="card">
      {/* Image Section */}
      {image && <img src={image} alt="Artwork" className="card-image" />}

      {/* Tags */}
      <div className="tags">
        {labels.map((label) => (
          <span key={label.id} className={`tag ${label.color}`}></span>
        ))}
      </div>

      {/* Title & Description */}
      <div className="card-content">
        <h3 className="card-title">{title.trim() ? title : ""}</h3>
        <p className="card-description">
          {description.trim() ? description : ""}
        </p>
      </div>

      {/* Avatar Section */}
      <div className="card-footer">
        <div className="avatars">
          {members.map((member, index) => (
            <img
              key={member.id || index}
              src={member.avatar}
              alt={`User${index}`}
              className="avatar"
            />
          ))}
          <div className="avatar add-avatar">+</div>
        </div>

        {/* Icons Section */}
        <div className="icons">
          <span>
            <FaRegComment /> {comments}
          </span>
          <span>
            <FaRegHeart /> {votes}
          </span>
          <span>
            <FaPaperclip /> {attachments}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
