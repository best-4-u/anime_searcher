import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../state/store";
import { IAnimeDetails } from "../../models/animeList/IAnimeListDetails";

import ListItem from "../ListItem/ListItem";

import styles from "./List.module.scss";
import { clearList } from "../../state/slices/anime/animeSlice";

export default function List() {
  const list = useSelector<RootState, IAnimeDetails[]>(
    (state) => state.animeList.list
  );

  const dispatch = useDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(clearList());
    };
  }, [dispatch]);

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
