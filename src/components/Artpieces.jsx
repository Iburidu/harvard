import React from 'react'
import Artpiece from './Artpiece'
import '../App.css'
import Layout from './Layout'

function Artpieces({artData, filter}) {


  return (
    <Layout>
    <div className='card-container'>
      {artData
      // .filter((artpiece) =>
      // artpiece.technique.toLowerCase().includes(filter.toLowerCase())
      //   )
        .map((artpiece, i) => (
      <Artpiece key={i} artPieceData={artpiece} />
      
      ))}</div>
      </Layout>
  )
}

export default Artpieces