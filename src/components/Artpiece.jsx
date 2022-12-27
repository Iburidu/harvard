import React, { useState } from "react";
import "../App.css";

function Artpiece({ artPieceData }) {
  const [isFavorite, setIsFavorite] = useState(true);

  return (
    <>
    <div className='card'>
      <div className='img-container'>

        {/* is favorite yes or no start */}
        <p
          className='star'
          onClick={() => {
            setIsFavorite((oldValue) => !oldValue);
          }}
        >
          {isFavorite ? "☆" : "★"}
        </p>
        {/* is favorite yes or no END */}

        <video controls width='100%'>
          <source src={artPieceData.primaryurl} />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      {/* <h2>{artPieceData.title}</h2> */}
      <h1> Description: {artPieceData.description}</h1>
    </div>
    </>
  );
}

export default Artpiece;
