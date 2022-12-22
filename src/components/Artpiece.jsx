import React from "react";
import "../App.css";

function Artpiece({ artPieceData }) {
  return (
    <div className='card'>
      <div className="img-container">
       <img src={artPieceData.primaryImage
} alt={artPieceData.title} />
</div>
      {/* <h2>{artPieceData.title}</h2> */}
      <h1> Technique: {artPieceData.objectName}</h1>
      <h2> title: {artPieceData.title}</h2>

    </div>
  );
}

export default Artpiece;
