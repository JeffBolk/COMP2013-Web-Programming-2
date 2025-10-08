//ColorBox Component
import { useState } from "react";
export default function ColorBox(newColor) {
  const [colors, setColors] = useState(Math.floor(Math.random() * 25));
  console.log(newColor);
  return (
    <>
      <div
        onClick={() => setColors(Math.floor(Math.random() * 25))}
        style={{ backgroundColor: newColor[colors] }}
        className="colorBox"
      ></div>
    </>
  );
}
