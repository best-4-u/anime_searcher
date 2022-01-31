import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import animeDataService from "../../api/services/anime.service";

import { IAnimeDetails } from "../../models/animeDetails/IAnimeDetails";

import NotFound from "../NotFound/NotFound";
import LoaderSkeleton from "./components/LoaderSkeleton/LoaderSkeleton";
import AnimeContent from "./components/AnimeContent/AnimeContent";

import styles from "./AnimeDetails.module.scss";

enum Loading {
  PENDING,
  FAILED,
  SUCCEEDED,
}

const AnimeDetails: FC = () => {
  const params = useParams();

  const [loading, setLoading] = useState<Loading>(Loading.PENDING);

  const animeName = params.animeName ?? "";

  const [anime, setAnime] = useState<IAnimeDetails | null>(null);

  useEffect(() => {
    animeDataService
      .getAnimeListByDetails(animeName)
      .then((res) => {
        if (res.data.data.length > 0) {
          console.log(res.data.data[0]);
          setAnime(res.data.data[0]);
        }
        setLoading(Loading.SUCCEEDED);
      })
      .catch((err: Error) => {
        console.error(err);
        setLoading(Loading.FAILED);
      });
  }, [animeName]);

  if (loading === Loading.SUCCEEDED && anime === null) {
    return <NotFound />;
  }
  if (loading === Loading.FAILED && anime === null) {
    return <h1>Something bad happened, sorry</h1>;
  }

  if (anime === null) {
    return (
      <div className={styles.anime_details}>
        <LoaderSkeleton />
      </div>
    );
  }

  return (
    <main>
      <div className={styles.anime_details}>
        <AnimeContent {...anime} />
      </div>
    </main>
  );
};

export default AnimeDetails;
