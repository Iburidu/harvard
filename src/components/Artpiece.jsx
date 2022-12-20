import React from 'react'

function Artpiece({artPieceData}) {
   
  return (
    <div>
        <h1>{artPieceData.records.date.map((record, idx) => (record={record}))}</h1>
    </div>
  )
}


export default Artpiece