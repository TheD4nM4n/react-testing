import { Typography } from "@mui/material";
import WelcomeCard from "../../components/cards/WelcomeCard/WelcomeCard";
import styles from "./DanPage.module.css";
function DanPage() {
  return (
  <div>
      <Typography className={styles.welcome}>
        Welcome to Dan's Page
      </Typography>
  </div>
  );
}

export default DanPage;