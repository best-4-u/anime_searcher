import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import animeDataService from "../../../api/services/anime.service";
import { IAnimeDetails } from "../../../models/animeList/IAnimeListDetails";
import NotFound from "../NotFound/NotFound";
import classNames from "classnames";
import styles from "./AnimeDetails.module.scss";

import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";
import { ReactComponent as StarIcon } from "../../../assets/icons/star.svg";
import { ReactComponent as DocumentIcon } from "../../../assets/icons/document.svg";
import { ReactComponent as HastagIcon } from "../../../assets/icons/hastag.svg";

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
                <h3> Начало: </h3>
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
                <h3> Рейтинг: </h3>
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
                <h3> Количество эпизодов: </h3>
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
                <h3> Тип аниме: </h3>
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
