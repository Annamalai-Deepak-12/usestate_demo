import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[yOffset,setYoffset] = useState(0)
  const[xOffset,setxoffset] = useState(0)

  const delta = 10
  const  moveTitle=(direction)=>{
    if(direction==="up" || direction==="down"){
      direction === "up" ? setYoffset(yOffset-delta) : setYoffset(yOffset+delta)
    }
    else{
      direction==="left" ? setxoffset(xOffset-delta) : setxoffset(xOffset+delta)

    }
  }
  return (
    <div>
      <h2 style={{position:"absolute", left:`${xOffset>0? xOffset:0}px`,top:`${yOffset>0?yOffset:0}px`}}>Welcome</h2>
      <div style={{margin:"80px"}}>
        <button  onClick={()=>moveTitle("down")}>Move title down</button>
        <button disabled={yOffset==0} onClick={()=>moveTitle("up")}>Move title up</button>
        <button disabled={xOffset==0} onClick={()=>moveTitle("left")}>Move title left</button>
        <button onClick={()=>moveTitle("right")}>Move title right</button>
      </div>
    </div>
  );
}

export default App;
