import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchAnimeList,
  Loading,
} from "../../../state/slices/anime/animeSlice";
import { IAnimeListDetails } from "../../../models/animeList/IAnimeListDetails";
import { RootState } from "../../../state/store";

import Loader from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./AnimeList.module.scss";
import List from "../../List/List";

const AnimeList: FC = () => {
  const loading = useSelector<RootState, Loading>(
    (state) => state.animeList.loading
  );

  const list = useSelector<RootState, IAnimeListDetails[]>(
    (state) => state.animeList.list
  );
  const errorText = useSelector<RootState, string>(
    (state) => state.animeList.errorText
  );
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnimeList(page));
  }, [page, dispatch]);

  return (
    <div className={styles.anime_main_list}>
      <InfiniteScroll
        dataLength={list.length}
        hasMore={true}
        loader={
          <div className={styles.loader}>
            <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
          </div>
        }
        next={() => {
          setPage((page) => page + 1);
        }}
      >
        <List />
      </InfiniteScroll>

      {loading === Loading.FAILED && (
        <div>
          Something went wrong
          <pre> {errorText} </pre>
        </div>
      )}
    </div>
  );
};

export default AnimeList;
