import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [character, setChar] = useState(false);
  const [number, setNumber] = useState(false);
  const [password,setPossword]=useState("");

  const Genratepwd=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number){
      str+="0123456789";
    }
    if(character){
      str+="`~!@#$%^&*()_+=?/|}{][";
    }
    for(let i=1;i<=length;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length+1));
      
    }
    setPossword(pass);

  },[length,character,number,setPossword]);
  useEffect(()=>{
    Genratepwd()
  },[length,number,character,Genratepwd]);

  const pwdref=useRef(null);
  
  const copytoclipboard=useCallback(()=>{
    pwdref.current.select();
    pwdref.current.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password);




  },[password]);

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div className="App-header">
        <input type="text" value={password} placeholder='Password'
        ref={pwdref} />

        <button onClick={copytoclipboard}>Copy</button>



      </div>
      <div className="dep">

        <div className="dep1">
          <input type="range" min={6} max={50} value={length} className='rangee' onChange={(e)=>setLength(e.target.value)} />
          <label htmlFor="">Length:{length}</label>
        </div>

        <div className="dep2">
          <input type="checkbox" defaultChecked={number} id='numberinput' 
          onChange={()=>{setNumber((prev)=>!prev)}
          }
          />
          <label htmlFor="numberinput"> Number</label>
        </div>
        <div className="dep3">
          <input type="checkbox" defaultChecked={character} id='characterinput' 
          onChange={()=>{ setChar((prev)=>!prev)}}/>
          <label htmlFor="characterinput"> Character</label>
        </div>

      </div>


    </div>
    
  )
}

export default App
