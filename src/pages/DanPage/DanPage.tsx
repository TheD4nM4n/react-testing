import { Typography } from "@mui/material";
import WelcomeCard from "../../components/cards/WelcomeCard/WelcomeCard";
import styles from "./DanPage.module.css";
import GraphCard from "../../components/cards/GraphCard/GraphCard";
import NewApplicantCard from "../../components/cards/NewApplicantCard/NewApplicantCard";

function DanPage() {
  return (
  <div>
      <div className={styles.cardContainer}>
        <Typography sx={{ fontSize: '30px', flex: '0 0 100%' }} className={styles.title}>
          Welcome to Dan's Page
        </Typography>
        <GraphCard />
        <WelcomeCard />
        <NewApplicantCard />
      </div>
  </div>
  );
}

export default DanPage;