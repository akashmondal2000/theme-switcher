import { useState } from "react";
import "./App.css";

const App = () => {

  const [count,setCount]= useState(0);

  const add =()=>{
    setCount(count+1);
  }
  const minus =()=>{
    setCount(count-1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>add</button>
      <button className=" ml-8" onClick={minus}>minus</button>
    </div>
  );
};

export default App;
