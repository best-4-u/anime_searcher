import { FC } from "react";

import styles from "./NotFound.module.scss";

const NotFound: FC = () => {
  return (
    <div className={styles.not_found}>
      <h1> 404 Not found </h1>
    </div>
  );
};

export default NotFound;
