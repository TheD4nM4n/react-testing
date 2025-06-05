import JustinComponent from "../../components/JustinComponent/JustinComponent";
import Accordian from "../../components/Accordian/Accordian";
import RCG from "../../components/RCG/RCG";
import StarRating from "../../components/StarRating/StarRating"
import ImageSlider from "../../components/ImageSlider/ImageSlider"

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
        <RCG />
        <StarRating numberOfStars={10}/>
        <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/>
      </div>
  </div>
  );
}

export default JustinPage;