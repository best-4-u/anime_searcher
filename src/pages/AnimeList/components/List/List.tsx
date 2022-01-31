import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { IAnimeDetails } from "../../../../models/animeDetails/IAnimeDetails";

import ListItem from "../ListItem/ListItem";

import styles from "./List.module.scss";

interface props {
  list: IAnimeDetails[]
}

const List: FC<props> = ({ list } : props) => {
  let navigate = useNavigate();

  const onClickItem = useCallback(
    (slug: string) => {
      navigate(`${slug}`);
    },
    [navigate]
  );

  return (
    <div className={styles.anime_list}>
      {list.map((item) => {
        return (
          <ListItem
            key={item.id}
            slug={item.attributes.slug}
            itemDetails={item.attributes}
            clickHandler={onClickItem}
          />
        );
      })}
    </div>
  );
}

export default List;