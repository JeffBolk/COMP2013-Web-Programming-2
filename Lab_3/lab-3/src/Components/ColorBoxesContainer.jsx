//ColorBox Container Component
import ColorBox from "./ColorBox";
export default function ColorBoxesContainer({ colors }) {
  return (
    <>
      <div className="colorBoxesContainer">
        {colors.map((color, index) => (
          <ColorBox key={index} {...colors} />
        ))}
      </div>

      {/* <div className="colorBoxesContainer">
        {colors.map(() => (
          <div onClick={() => setIndex(Math.floor(Math.random() * 25))}>
            <ColorBox color={colorArray[index]}></ColorBox>
          </div>
        ))}
      </div> */}
    </>
  );
}
