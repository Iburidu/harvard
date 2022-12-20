import React from 'react'

function Artpiece({artPieceData}) {
  
  return (
    <div>
        <h1>{artPieceData.culture}</h1>
        <h2>{artPieceData.title}</h2>
        {/* <img src={artPieceData.images[0].map(({images, iiifbaseuri}) => ({images: iiifbaseuri}))} alt="{artPieceData.title}" /> */}
    
    </div>
  )
}


export default Artpiece