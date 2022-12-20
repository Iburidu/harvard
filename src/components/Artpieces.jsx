import React from 'react'
import Artpiece from './Artpiece'

function Artpieces({artData}) {


  return (
    <div>{artData.map((artpiece, i) => (
      <Artpiece key={i} artPieceData={artpiece} />
      
      ))}</div>
  )
}

export default Artpieces