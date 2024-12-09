import React from 'react'
import './Number.css'

function Number({selectedNum, setSelectedNum , error}) {
    const array = [1,2,3,4,5,6]
    
    
  return (

    <div>
      <p className='para2'>{error}</p>
    <div className='box1'>
     {
        array.map(
            (value, i) => (
            <box
            selected = {value == selectedNum}
            onClick = {() => setSelectedNum(value)}
            key={i} className="box">{value}</box>
          )
        )
     }
    <div>
    <p className='p'>Select Number</p>
    </div>
    </div>
    </div>


  )
}

export default Number
