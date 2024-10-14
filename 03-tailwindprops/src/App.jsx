import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  let Obj = {
    username: "Afzal",
    age: 18,
  };
  let arr = [1, 2, 3];
  let about = "hello i am dino your virtual assistant";
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card userName="chaiaurcode" btnText="visit me" />
      <Card userName="hitesh" btnText="click me" about={about} />
    </>
  );
}

export default App;
