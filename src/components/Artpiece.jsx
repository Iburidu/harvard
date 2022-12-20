import React from 'react'

function Artpiece({artPieceData}) {
  
  return (
    <div>
        <h1>{artPieceData.culture}</h1>
        <h2>{artPieceData.title}</h2>
        <div>Image id: {artPieceData.images[0].imageid}</div>
    
    </div>
  )
}


export default Artpiece