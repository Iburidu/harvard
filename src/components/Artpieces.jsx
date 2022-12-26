import React from 'react'
import Artpiece from './Artpiece'
import '../App.css'

function Artpieces({artData}) {
  console.log(artData);


  return (
    <div className='card-container'>
      {artData.map((artpiece, i) => (
      <Artpiece key={i} artPieceData={artpiece} />
      
      ))}</div>
  )
}

export default Artpieces