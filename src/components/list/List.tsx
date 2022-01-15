import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../state/store";
import { IAnimeDetails } from "../../models/animeList/IAnimeListDetails";

import ListItem from "../ListItem/ListItem";

import styles from "./List.module.scss";

export default function List() {
  const list = useSelector<RootState, IAnimeDetails[]>(
    (state) => state.animeList.list
  );

  let navigate = useNavigate();

  const onClickItem = useCallback((slug: string) => {
    console.log("item", slug);

    navigate(`${slug}`);
  }, []);

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
