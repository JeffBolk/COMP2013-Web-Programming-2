import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <h1>Diamond World</h1>
      <div className="main-container">
        <Card
          image="src\assets\images\princess.jpg"
          description="Princess"
          price="$1,350"
        />
        <Card
          image="src\assets\images\swan.jpg"
          description="Swan"
          price="$900"
        />
        <Card
          image="src\assets\images\iceLake.jpg"
          description="Ice Lake"
          price="$1,100"
        />
      </div>
    </>
  );
}

export default App;
