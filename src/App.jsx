import { useState } from "react";
import "./App.css";
import ColorSelect from "./components/ColorSelect";

function App() {
  const [color, setColor] = useState("");

  const colorChange = (colorCode) => {
    setColor(colorCode);
  };
  return (
    <section className="flex flex-col justify-center items-center h-[600px]">
      <h1 className="font-bold text-3xl">Set BG Color Parent</h1>
      <section
        className="border border-black w-[500px] h-[300px] flex justify-center items-center "
        style={{ backgroundColor: color }}
      >
        <ColorSelect colorChange={colorChange} />
      </section>
    </section>
  );
}

export default App;
