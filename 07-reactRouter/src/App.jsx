import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-red-400 text-3xl">React Router </h1>
    </>
  );
}

export default App;
