import { useState } from "react";
import "./App.css";

function App() {
  const [ColorType, setColorType] = useState<string>();
  const [color, setColor] = useState<string | null>(null);

  const randomeColorUtili = (length: number): number => {
    return Math.floor(Math.random() * length);
  };

  const handelClick = () => {
    if (ColorType == "HAX") {
      const HAX = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let haxColor = "#";
      for (let i = 0; i < 6; i++) {
        haxColor += HAX[randomeColorUtili(HAX.length)];
      }
      setColor(haxColor);
    } else if (ColorType == "RGB") {
      const r: number = randomeColorUtili(256);
      const g: number = randomeColorUtili(256);
      const b: number = randomeColorUtili(256);
      setColor(`rgb(${r},${g},${b})`);
    }
  };
  return (
    <div
      className="container"
      style={{
        backgroundColor: color || "white",
      }}
    >
      <div className="header">
        <div onClick={() => setColorType("HAX")}>Create HAX Color</div>
        <div onClick={() => setColorType("RGB")}>Create RGB Color</div>
        <div onClick={handelClick}>Create Rendom Color</div>
      </div>
      <div className="info">
        <div className="ctype">{ColorType}</div>
        <div className="colorInfo">{color}</div>
      </div>
    </div>
  );
}

export default App;
