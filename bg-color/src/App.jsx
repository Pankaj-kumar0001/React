import { useState } from "react";
import './index.css';

function App() {
  const [color, setColor] = useState("Green");
  

  return (
    <div className="App" style={{backgroundColor:color}}>

    <div className="btn" >
     
     <button style={{backgroundColor:"red"}} onClick={()=>setColor("Red")}>Red</button>
      <button style={{backgroundColor:"Blue"}} onClick={()=>setColor("Blue")}>Blue</button>
       <button style={{backgroundColor:"Yellow"}} onClick={()=>setColor("Yellow")}>Yellow</button>
        <button style={{backgroundColor:"Pink"}} onClick={()=>setColor("Pink")}>Pink</button>


    </div>
    </div>
  )
}

export default App
