import React from "react";
import "./cardHeader.css";
import { FaEllipsisH } from "react-icons/fa";

const CardHeader = ({ title }) => {
  return (
    <div className="cardHeader">
      <span className="cardHeader-title">{title}</span>
      <FaEllipsisH className="cardHeader-menu-icon" />
    </div>
  );
};

export default CardHeader;
