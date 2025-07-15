import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(Props) {
  return (
    <div className="card">
      <h1>{Props.title}</h1>
      <p>{Props.text}</p>
    </div>
  )
}



export default App
