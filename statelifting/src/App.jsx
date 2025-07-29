

import { useState } from 'react'
import Card from '../components/card'
import './App.css'
import Card2 from '../components/Card2';

function App() {

  const [name, setName]= useState(" ");


  return (
    <>
      <Card name={name} changename={setName} />

      <p> Name:{name}</p>
      <Card2 name={name}/>
    </>
  )
}

export default App
