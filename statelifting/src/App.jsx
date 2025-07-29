

import { useState } from 'react'
import Card from '../components/card'
import './App.css'

function App() {

  const [name, setName]= useState(" ");


  return (
    <>
      <Card name={name} changename={setName} />

      <p> Name:{name}</p>
    </>
  )
}

export default App
