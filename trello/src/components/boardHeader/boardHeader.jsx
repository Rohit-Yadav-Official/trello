import React from "react";
import "./boardHeader.css";
import { FaHdd } from "react-icons/fa";
import RectangleIcon from "../../assets/headerIcon/Rectangle.png";
import globeIcon from "../../assets/headerIcon/globe-2-outline.png";
import heartIcon from "../../assets/headerIcon/Heart.png";
import hard from "../../assets/headerIcon/Hard.png";

const members = [
  { id: "user-1", name: "User 1", avatar: "https://i.pravatar.cc/30?img=1" },
  { id: "user-2", name: "User 2", avatar: "https://i.pravatar.cc/30?img=2" },
  { id: "user-3", name: "User 3", avatar: "https://i.pravatar.cc/30?img=3" },
  { id: "user-4", name: "User 4", avatar: "https://i.pravatar.cc/30?img=4" },
  { id: "user-5", name: "User 5", avatar: "https://i.pravatar.cc/30?img=5" },
  { id: "user-6", name: "User 6", avatar: "https://i.pravatar.cc/30?img=6" },
  { id: "user-7", name: "User 7", avatar: "https://i.pravatar.cc/30?img=7" },
  { id: "user-8", name: "User 8", avatar: "https://i.pravatar.cc/30?img=8" },
  { id: "user-9", name: "User 9", avatar: "https://i.pravatar.cc/30?img=9" },
  { id: "user-10", name: "User 10", avatar: "https://i.pravatar.cc/30?img=10"} ,
];

const BoardHeader = () => {
  const maxVisible = 6;
  const visibleMembers = members.slice(0, maxVisible);
  const remainingCount = members.length - maxVisible;

  return (
    <header className="brackets-header">
      {/* Left Side: Title & Icons */}
      <div className="left-section">
        <h2 className="title">Brackets</h2>
        <div className="icons">
        <img src={heartIcon} alt="Separator" className="rectangle" />
          <img src={RectangleIcon} alt="Separator" className="rectangle" />
          <img src={globeIcon} alt="Separator" className="rectangle" />
          <span className="icon disabled">Public</span>

          <img src={hard} alt="Separator" className="rectangle" />
        </div>
      </div>

      {/* Right Side: User Avatars & Menu */}
      <div className="right-section">
        <div className="avatar-group">
          {visibleMembers.map((user, index) => (
            <img
              key={index}
              src={user.avatar}
              alt={user.name}
              className="avatar"
              
            />
          ))}
          {remainingCount > 0 && (
            <div className="more-users" >
              +{remainingCount}
            </div>
          )}
        </div>
        <span className="menu-text">Menu</span>
      </div>
    </header>
  );
};

export default BoardHeader;
