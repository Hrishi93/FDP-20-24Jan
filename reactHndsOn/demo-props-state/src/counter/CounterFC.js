import React, {useState} from 'react'

function CounterFC() {

  const [count, setCount] = useState(0); 
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=> setCount(count+1)}>+</button>
      <br></br>
      <button onClick={()=> setCount(count-1)}>-</button>
    </div>
  )
}
export default CounterFC;