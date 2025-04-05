import React, { useState, useEffect } from "react";
import "./header.css";
import { FaSearch } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";



import headericon from "../../assets/Icons.png";
import TrelloIcon from "../../assets/headerIcon/Logo.png";
import RectangleIcon from "../../assets/headerIcon/Rectangle.png";
import trellomark from "../../assets/headerIcon/trello-mark-blue.png";

const avatar="https://randomuser.me/api/portraits/women/5.jpg";
const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      {/* Left Section - Logo & Boards */}
      <div className="header-leftsection">

    <div className="logo-section">
     { !isMobile ?
     ( <>
     
     
      <img src={TrelloIcon} alt="Logo" className="TrelloIcon" />
      <img src={RectangleIcon} alt="Separator" className="rectangle" />

      <div className="header-boards">
        <img src={trellomark} alt="Trello Mark" className="trellomark" />
        <h3>Boards</h3>
      </div>

      <img src={RectangleIcon} alt="Separator" className="rectangle" />
       </>

      



    
     ):(
      <img src={trellomark} alt="Trello Mark" className="trellomark" />
     ) }
</div>
      
      <div className="search-container">
        {isMobile ? (
          <FaSearch className="search-icon-mobile-search" />
        ) : (
          <>
            <input type="text" className="search-bar" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </>
        )}
      </div> 
      
      </div>
      {/* Middle Section - Search Bar */}
     

      {/* Right Section - User & Menu */}
      <div className="user-menu">
        <div className="avatar-group">
        
          <div className="icon-wrapper">
  <FaPlusCircle className="custom-icon" />
  <FaExclamationCircle className="custom-icon" />
  <FaBell className="custom-icon" />
</div>
        </div>
        <img  src={avatar} className="user-image" />

      </div>
    </header>
  );
};

export default Header;
