import React from "react";
import "../App.css";

function Artpiece({ artPieceData }) {
  return (
    <div className='card'>
      <div className="img-container">
       <video controls width="100%">
        <source src={artPieceData.primaryurl}/>
        Sorry, your browser doesn't support embedded videos.
       </video>
</div>
      {/* <h2>{artPieceData.title}</h2> */}
      <h1> Description: {artPieceData.description}</h1>

    </div>
  );
}

export default Artpiece;
