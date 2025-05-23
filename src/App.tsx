import CardExample from "./components/CardExample";
import Center from "./components/Center";
import JustinComponent from "./JustinComponent/JustinComponent";
import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  return (
  <div>
    <Center>
      <h1 style={{ marginTop: '16px', }}>Welcome to the Playground</h1>
      <i><h2 style={{ marginBottom: '16px', color: '#d0d0d0'}}>Be careful in here, it's scary</h2></i>
      <CardExample />
      <JustinComponent />
    </Center>    
  </div>
  );
}

export default App;