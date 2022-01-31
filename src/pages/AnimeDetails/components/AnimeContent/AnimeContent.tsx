import { FC } from "react";
import classNames from "classnames";

import { IAnimeDetails } from "../../../../models/animeDetails/IAnimeDetails";

import { ReactComponent as CalendarIcon } from "../../../../assets/icons/calendar.svg";
import { ReactComponent as StarIcon } from "../../../../assets/icons/star.svg";
import { ReactComponent as DocumentIcon } from "../../../../assets/icons/document.svg";
import { ReactComponent as HastagIcon } from "../../../../assets/icons/hastag.svg";

import styles from "./AnimeContent.module.scss";

const AnimeContent: FC<IAnimeDetails> = (anime: IAnimeDetails) => {
  return (
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
  );
};

export default AnimeContent;
