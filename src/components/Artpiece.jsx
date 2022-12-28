import React, { useState } from "react";
import "../App.css";

function Artpiece({ artPieceData }) {
  const [isFavorite, setIsFavorite] = useState(true);

  return (
    <div className='card'>
      <p
        className='star'
        onClick={() => {
          setIsFavorite((oldValue) => !oldValue);
        }}
      >
        {isFavorite ? "☆" : "★"}
      </p>
      <div className='img-container'>
        <img src={artPieceData.baseimageurl} alt={artPieceData.format} />
      </div>
      <h2>Description: {artPieceData.description}</h2>
      <h2>Recording: {artPieceData.date}</h2>
      <h1>Technique: {artPieceData.technique}</h1>
      <p>Last update: {artPieceData.lastupdate.slice(0, 10)}</p>
    </div>
  );
}

export default Artpiece;
