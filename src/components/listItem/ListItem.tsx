import { FC, memo } from "react";
import { IAnimeListDetails } from "../../models/animeList/IAnimeListDetails";

import styles from './ListItem.module.scss'

interface IListItem {
  clickHandler(item: IAnimeListDetails): void;
  itemDetails: IAnimeListDetails;
}

const ListItem: FC<IListItem> = function ({ clickHandler, itemDetails }) {
  return (
    <div
      className={styles.list_item}
      onClick={() => {
        clickHandler(itemDetails);
      }}
    >
      <div>
        <img src={itemDetails.image_url} alt="anime" width={50} height={50} />
        <span>{itemDetails.title}</span>
      </div>
    </div>
  );
};

export default memo(ListItem);
