import JustinComponent from "../../components/JustinComponent/JustinComponent";
import Accordian from "../../components/Accordian/Accordian";

function JustinPage() {
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
        <JustinComponent />
        <Accordian />
      </div>
  </div>
  );
}

export default JustinPage;