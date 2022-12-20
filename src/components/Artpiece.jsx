import React from 'react'

function Artpiece({artPieceData}) {
  
  return (
    <div>
        <h1>{artPieceData.culture}</h1>
        <h2>{artPieceData.title}</h2>
    
    </div>
  )
}


export default Artpiece