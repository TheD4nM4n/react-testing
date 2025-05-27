import CardExample from "../../components/cards/CardExample";
import WelcomeCard from "../../components/cards/WelcomeCard/WelcomeCard";

function DanPage() {
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
        <WelcomeCard />
      </div>
  </div>
  );
}

export default DanPage;