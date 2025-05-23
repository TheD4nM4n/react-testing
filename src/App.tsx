import CardExample from "./components/CardExample";
import Center from "./components/Center";
import "./App.css";
import JustinComponent from "./JustinComponent/JustinComponent";

function App() {
  return (
  <div>
    <Center>
      <h1 className="title">
        Welcome to the Playground
      </h1>
      <h2 className="subtitle">
        <i>
          Be careful in here, it's scary
        </i>
      </h2>
      <CardExample />
      <JustinComponent />
    </Center>    
  </div>
  );
}

export default App;