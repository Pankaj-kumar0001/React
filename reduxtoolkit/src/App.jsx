
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,reset,incrementbyamount} from './features/Counter/Counterslice';


function App() {

  const count= useSelector((state)=>state.counter.value);
  const [amount,setAmount]= useState(0);
   
  const dispatch = useDispatch();

  function incementhandler(){
    dispatch(increment());

  }
  function decrementhandler(){
    dispatch(decrement());

  }
  function Resethandler(){
    dispatch(reset());
  }
  function amounthandler(){
    dispatch(incrementbyamount(amount))
  }
  

  return (
   <>
    <button onClick={incementhandler}> +</button>
    <p>Count : {count}</p>
    <button onClick={decrementhandler}> -</button>
    <br />
    <br />

    <button onClick={Resethandler}> Reset</button>
    <br />

 <input type="Number" 
 value={amount}
 onChange={(e)=>setAmount(e.target.value)}

 
/>
    <br />
    <button onClick={amounthandler}> inc by amount</button>
    


   </>
  )
}

export default App
