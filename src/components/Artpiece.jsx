import React, {useState} from "react";
import "../App.css";


function Artpiece({ artPieceData }) {

  const [isFavorite, setIsFavorite] = useState(true)

  return (
    
    <div className='card'>
      <p className="star"
      onClick={() => {setIsFavorite((oldValue) => !oldValue)}}>
      {isFavorite ? "☆" : "★"}
      </p>
      <div className="img-container">
       <img src={artPieceData.baseimageurl
} alt={artPieceData.title} />
</div>
      {/* <h2>{artPieceData.title}</h2> */}
      <h1> Technique: {artPieceData.technique}</h1>

    </div>
    
  );
}

export default Artpiece;
