import JustinComponent from "../../components/JustinComponent/JustinComponent";
import Accordian from "../../components/Accordian/Accordian";
import RCG from "../../components/RCG/RCG";
import StarRating from "../../components/StarRating/StarRating"
import ImageSlider from "../../components/ImageSlider/ImageSlider"
import { Grid } from "@mui/material";
import styles from "./JustinPage.module.css"

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
      <div className={styles.cardcontainer}>
        <div className="item"><JustinComponent /></div>
        <div className="item"><Accordian /></div>
        <div className="item"><RCG /></div>
        <div className="item"><StarRating numberOfStars={10}/></div>
        <div className="item"><ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/></div>
      </div>
  </div>
  );
}

export default JustinPage;