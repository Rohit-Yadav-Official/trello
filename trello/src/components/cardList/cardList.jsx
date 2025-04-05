import React from "react";
import Card from "../card/card";
import CardHeader from "../card header/cardHeader";
import AddNewCard from "../addnewCard/addnewCard";
const CardList = ({ title,cardata }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <CardHeader title={title} />
      {cardata.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
       <AddNewCard/>
    </div>
  );
};

export default CardList;
