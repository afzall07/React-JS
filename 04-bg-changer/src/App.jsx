import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
          <div className="fixed flex flex-wrap justify-center bg-white px-3 py-2 rounded-3xl gap-4">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              violet
            </button>
            <button
              onClick={() => setColor("chocolate")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "chocolate" }}
            >
              chocolate
            </button>
            <button
              onClick={() => setColor("cyan")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "cyan" }}
            >
              cyan
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              purple
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>
            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "gray" }}
            >
              gray
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
