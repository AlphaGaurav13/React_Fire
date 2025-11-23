import React, {useState} from 'react';

const App = () => {

  var user = "Gaurav";

  // we cant make changes like this we have to use React optimized function which we call Hooks in react 
  // for doing that changes like this we use useState hook


  const [user1, seta] = useState("Gaurav");
  // const name1 = () => {
  //   user = "dimple";
  // }
 const [counter, setCounter] = useState(0);
  const name1 = () => {
    seta("Dimple");
  }

  const inc = () => {
    setCounter(counter + 1);
  }

  const dec = () => {
    setCounter(counter - 1);
  }

  return(
    <div>
      <h1>Hello {user1}</h1>
      <h1>COUNTER : {counter}</h1>
      <button onClick= {inc}>+</button>
      <button onClick= {dec}>-</button>
      <button onClick={name1}>click</button>
    </div>
  )
}

export default App;