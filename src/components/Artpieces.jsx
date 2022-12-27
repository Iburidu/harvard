import React from 'react'
import Artpiece from './Artpiece'
import '../App.css'

function Artpieces({artData, filter}) {


  return (
    <div className='card-container'>
      {artData
      // .filter((artpiece) =>
      // artpiece.description.toLowerCase().includes(filter.toLowerCase())
      //   )
        .map((artpiece, i) => (
      <Artpiece key={i} artPieceData={artpiece} />
      
      ))}</div>
  )
}

export default Artpieces