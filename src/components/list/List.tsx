import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../state/store";
import { fetchAnimeList } from "../../state/slices/anime/animeSlice";
import { IAnimeListDetails } from "../../models/animeList/IAnimeListDetails";

import ListItem from "../listItem/ListItem";

import styles from "./List.module.scss"

export function List() {
  const [name, setName] = useState<string>("");

  const dispatch = useDispatch();
  const list = useSelector<RootState, IAnimeListDetails[]>(
    (state) => state.animeList.list
  );

  useEffect(() => {
    dispatch(fetchAnimeList(1));
  }, []);

  const onClickItem = useCallback((item: IAnimeListDetails) => {
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
            key={item.mal_id}
            itemDetails={item}
            clickHandler={onClickItem}
          />
        );
      })}
    </div>
  );
}
