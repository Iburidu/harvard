import React, { useState } from "react";
import "../App.css";

function Artpiece({ artPieceData }) {
  const [isFavorite, setIsFavorite] = useState(true);

  return (
    <div className='card'>
      <div className='img-container'>
        <img src={artPieceData.primaryImage} alt={artPieceData.title} />
      </div>
      {/* <h2>{artPieceData.title}</h2> */}
      <h1> Technique: {artPieceData.objectName}</h1>
      <h2> Title: {artPieceData.title}</h2>
      <p>Classification: {artPieceData.classification}</p>
      <p className="star"
        onClick={() => {
          setIsFavorite((oldValue) => !oldValue);
        }}
      >
        {isFavorite ? "☆" : "★"}
      </p>
    </div>
  );
}

export default Artpiece;
