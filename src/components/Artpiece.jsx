import React from "react";
import "../App.css";

function Artpiece({ artPieceData }) {
  return (
    <div className='card'>
      <div className="img-container">
       <img src={artPieceData.baseimageurl
} alt={artPieceData.title} />
</div>
      {/* <h2>{artPieceData.title}</h2> */}
      <h1> Technique: {artPieceData.technique}</h1>
      <h2> Date: {artPieceData.date}</h2>

    </div>
  );
}

export default Artpiece;
