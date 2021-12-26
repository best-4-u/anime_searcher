import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../state/store";
import { IAnimeListDetails } from "../../models/animeList/IAnimeListDetails";

import ListItem from "../ListItem/ListItem";

import styles from "./List.module.scss";

export default function List() {
  const [name, setName] = useState<string>("");

  const list = useSelector<RootState, IAnimeListDetails[]>(
    (state) => state.animeList.list
  );

  const onClickItem = useCallback((item: string) => {
    console.log("item", item);
  }, []);

  return (
    <div className={styles.anime_list}>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {list.map((item) => {
        return (
          <ListItem
            key={item.id}
            id={item.id}
            itemDetails={item.attributes}
            clickHandler={onClickItem}
          />
        );
      })}
    </div>
  );
}
