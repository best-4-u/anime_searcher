import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchAnimeList,
  Loading,
  setPage,
} from "../../state/slices/anime/animeSlice";
import { IAnimeDetails } from "../../models/animeDetails/IAnimeDetails";

import { clearList } from "../../state/slices/anime/animeSlice";
import { RootState } from "../../state/store";

import List from "./components/List/List";
import Loader from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./AnimeList.module.scss";

const AnimeList: FC = () => {
  const loading = useSelector<RootState, Loading>(
    (state) => state.animeList.loading
  );
  const list = useSelector<RootState, IAnimeDetails[]>(
    (state) => state.animeList.list
  );
  const errorText = useSelector<RootState, string>(
    (state) => state.animeList.errorText
  );
  const page = useSelector<RootState, number>((state) => state.animeList.page);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearList());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAnimeList(page));
  }, [page, dispatch]);

  return (
    <main>
      <div className={styles.anime_main_list}>
        <InfiniteScroll
          dataLength={list.length}
          hasMore={true}
          loader={
            <div className={styles.loader}>
              <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
          }
          next={() => {
            dispatch(setPage(page + 1));
          }}
        >
          <List list={list} />
        </InfiniteScroll>

        {loading === Loading.FAILED && (
          <div>
            Something went wrong
            <pre> {errorText} </pre>
          </div>
        )}
      </div>
    </main>
  );
};

export default AnimeList;
