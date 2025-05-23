import CardExample from "./components/CardExample";
import "./App.css";
import JustinComponent from "./components/JustinComponent/JustinComponent";

function App() {
  return (
  <div>
      <h1 className="title">
        Welcome to the Playground
      </h1>
      <h2 className="subtitle">
        <i>
          Be careful in here, it's scary
        </i>
      </h2>
      <div className="card-container">
        <CardExample />
        <JustinComponent />
      </div>
  </div>
  );
}

export default App;