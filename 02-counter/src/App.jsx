import { useState } from "react";
import "./App.css";
// Hooks
function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 5;
  const addValue = () => {
    // console.log(counter);
    // counter = counter + 1;
    // if (counter < 20) {
    //   setCounter(counter + 1);
    //   setCounter(counter + 1);
    //   setCounter(counter + 1);
    //   setCounter(counter + 1);
    // }

    // add multiple value on one click
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      // setCounter(counter - 1);
      // setCounter(counter - 1);
      // setCounter(counter - 1);
      // setCounter(counter - 1);
      // setCounter(counter - 1);

      // decrease multiple value on one click
      setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter - 1);
    }
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
