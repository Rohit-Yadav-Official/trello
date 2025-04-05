import React from "react";
import "./boardHeader.css";
import { FaHdd } from "react-icons/fa";
import RectangleIcon from "../../assets/headerIcon/Rectangle.png";

const userAvatars = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
];

const boardHeader = () => {
  return (
    <header className="brackets-header">
      {/* Left Side: Title & Icons */}
      <div className="left-section">
        <h2 className="title">Brackets</h2>
        <div className="icons">
          <span className="icon">♡</span>
          <img src={RectangleIcon} alt="Separator" className="rectangle" />
          <span className="icon disabled">🔗 Public</span>
          <img src={RectangleIcon} alt="Separator" className="rectangle" />
          <FaHdd className="storage-icon" />


        </div>
      </div>

      {/* Right Side: User Avatars & Menu */}
      <div className="right-section">
        <div className="avatar-group">
          {userAvatars.map((avatar, index) => (
            <img key={index} src={avatar} alt={`User ${index}`} className="avatar" />
          ))}
          <div className="more-users">+44</div>
        </div>
        <span className="menu-text">Menu</span>
      </div>
    </header>
  );
};

export default boardHeader;
