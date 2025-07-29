import React from 'react'

function Card(Props) {
  return (
    <div>

        <input type="text" onChange={(e)=> Props.changename(e.target.value)} />
        <h1> Change name inside Child component <br></br> Name={Props.name}</h1>
    </div>
  )
}

export default Card