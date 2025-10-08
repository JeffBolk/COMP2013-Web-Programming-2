//Jeffrey Bolk
//Web Programming lab 3
import "./App.css";
import ColorBoxesContainer from "./Components/ColorBoxesContainer";
import data from "./data/data";

function App() {
  const colorArray = [];
  data.map((color) => colorArray.push(color));
  return (
    <>
      <ColorBoxesContainer colors={colorArray} />
    </>
  );
}

export default App;
