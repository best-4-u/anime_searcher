import { FC } from "react";

import styles from "./AnimeDetails.module.scss"

const AnimeDetails: FC = () => {
  return (
    <div className={styles.anime_details}>
      <img src="./asd.png" width={200} height={200} alt="anime" />
    </div>
  )
};

export default AnimeDetails;
