import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import animeDataService from "../../../api/services/anime.service";
import { IAnimeDetails } from "../../../models/animeList/IAnimeListDetails";
import NotFound from "../NotFound/NotFound";

import styles from "./AnimeDetails.module.scss";

const AnimeDetails: FC = () => {
  const params = useParams();

  const animeName = params.animeName ?? "";

  const [anime, setAnime] = useState<IAnimeDetails | null>(null);

  useEffect(() => {
    animeDataService.getAnimeListByDetails(animeName).then((res) => {
      if (res.data.data.length > 0) {
        console.log(res.data.data[0]);
        setAnime(res.data.data[0]);
      }
    });
  }, [animeName]);

  if (anime === null) {
    return <NotFound />;
  }

  return (
    <div className={styles.anime_details}>
      <div className={styles.container}>
        <div>
          <img src={anime.attributes.coverImage.original} alt="anime" />
        </div>
        <div>
          <section className={styles.anime_title}>
            <h2>{anime.attributes.slug}</h2>
          </section>
          <section>
            <time>
              {" "}
              {
                new Date(anime.attributes.createdAt).toISOString().split("T")[0]
              }{" "}
            </time>
          </section>
          <section>
            <p>{anime.attributes.description}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
