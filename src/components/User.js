import { useState } from "react";
const User = (props) => {
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(1);
  return (
    <div className="userClass">
        <h1>Count={count}</h1>
        <h1>Count2={count2}</h1>
      <h1>Name:{props.name} </h1>
      <h2>Location:{props.location}</h2>
      <button onClick={()=>{
        setCount(count+1);
      }}>Increse count only</button>
      <button onClick={()=>{
        setCount2(count2+1)
      }}>Increse Count 2</button>
    
    </div>
  );
};
export default User;