import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";

import animeDataService from "../../../api/services/anime.service";

import { IAnimeDetails } from "../../../models/animeList/IAnimeListDetails";

import NotFound from "../NotFound/NotFound";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";
import { ReactComponent as StarIcon } from "../../../assets/icons/star.svg";
import { ReactComponent as DocumentIcon } from "../../../assets/icons/document.svg";
import { ReactComponent as HastagIcon } from "../../../assets/icons/hastag.svg";

import styles from "./AnimeDetails.module.scss";
import AnimeDetailsLoader from "./AnimeDetailsLoader";

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
    animeDataService.getAnimeListByDetails(animeName).then((res) => {
      if (res.data.data.length > 0) {
        console.log(res.data.data[0]);
        setAnime(res.data.data[0]);
      }
      setLoading(Loading.SUCCEEDED);
    }).catch( (err: Error) => {
      console.error(err);
      setLoading(Loading.FAILED);
    })
  }, [animeName]);


  if (loading === Loading.SUCCEEDED && anime === null) {
    return <NotFound />;
  }
  if (loading === Loading.FAILED && anime === null) {
    return null;
  }

  if (anime === null) {
    return (
      <div className={styles.anime_details}>
        <AnimeDetailsLoader />
      </div>
    )
  }

  return (
    <div className={styles.anime_details}>
      <div className={styles.container}>
        <section>
          <img src={anime.attributes.posterImage.original} alt="anime" />
        </section>
        <section>
          <h2 className={styles.anime_title}>
            {anime.attributes.canonicalTitle}
          </h2>
          <div className={styles.anime_info}>
            <section
              className={classNames(
                styles.anime_create_date,
                styles.anime_info_section
              )}
            >
              <div className={styles.icon_wrapper}>
                <CalendarIcon width={16} height={16} fill="#dbdbdb" />
              </div>
              <div>
                <h3> Start date: </h3>
                <time
                  className={styles.info_description}
                  dateTime={anime.attributes.startDate}
                >
                  {anime.attributes.startDate}
                </time>
              </div>
            </section>

            <section
              className={classNames(
                styles.anime_create_date,
                styles.anime_info_section
              )}
            >
              <div className={styles.icon_wrapper}>
                <StarIcon width={16} height={16} fill="#dbdbdb" />
              </div>
              <div>
                <h3> Rating: </h3>
                <span> {anime.attributes.averageRating} </span>
              </div>
            </section>

            <section
              className={classNames(
                styles.anime_create_date,
                styles.anime_info_section
              )}
            >
              <div className={styles.icon_wrapper}>
                <HastagIcon width={16} height={16} fill="#dbdbdb" />
              </div>
              <div>
                <h3> Episode count: </h3>
                <span> {anime.attributes.episodeCount} </span>
              </div>
            </section>

            <section
              className={classNames(
                styles.anime_create_date,
                styles.anime_info_section
              )}
            >
              <div className={styles.icon_wrapper}>
                <DocumentIcon width={16} height={16} fill="#dbdbdb" />
              </div>
              <div>
                <h3> Anime type: </h3>
                <span> {anime.attributes.showType} </span>
              </div>
            </section>
          </div>
          <section>
            <h2> Description </h2>
            <p>{anime.attributes.description}</p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default AnimeDetails;
