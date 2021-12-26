import { FC, memo, useState, useEffect, useRef } from "react";
import { IAnimeListDetailsAttributes } from "../../models/animeList/IAnimeListDetails";

import styles from "./ListItem.module.scss";
import classNames from "classnames";

interface IListItem {
  clickHandler(id: string): void;
  itemDetails: IAnimeListDetailsAttributes;
  id: string;
}

const ListItem: FC<IListItem> = function ({ clickHandler, itemDetails, id }) {
  const [clamped, setClamped] = useState<boolean>(true);
  const [showButton, setShowButton] = useState<boolean>(true);

  const handleClickClamp = (): void => {
    setClamped(!clamped);
  };

  const synopsisRef = useRef<HTMLDivElement>(null);

  const onResize = () => {
    const hasClamping = (el: HTMLDivElement) => {
      const { clientHeight, scrollHeight } = el;
      return clientHeight !== scrollHeight;
    };

    if (synopsisRef.current) {
      // const hadClampClass = synopsisRef.current.classList.contains(styles.clamp);
      // if (!hadClampClass) synopsisRef.current.classList.add(styles.clamp);
      setShowButton(hasClamping(synopsisRef.current));
      // if (!hadClampClass) synopsisRef.current.classList.remove(styles.clamp);
    }
  };

  useEffect(() => {
    const debounce = function <T extends Function>(cb: T, wait: number) {
      let timeout: null | ReturnType<typeof setTimeout> = null;
      let callable = (...args: any) => {
        if (timeout !== null) {
          clearTimeout(timeout);
        }
  
        timeout = setTimeout(() => {
          cb(...args);
        }, wait);
      };
  
      return callable;
    };

    const debouncedResize = debounce(onResize, 100);

    onResize();
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [synopsisRef]);

  return (
    <div
      className={styles.list_item}
      onClick={() => {
        clickHandler(id);
      }}
    >
      <div className={styles.left_side}>
        <img
          src={
            itemDetails.posterImage.medium || itemDetails.posterImage.original
          }
          alt="anime"
        />
      </div>
      <div className={styles.right_side}>
        <span className={styles.anime_item_title}>
          {itemDetails.canonicalTitle}
        </span>
        <div className={styles.anime_item_extra}>
          <div>
            <span> Rating: </span>
            <span> {itemDetails.averageRating} </span>
          </div>
          <div>
            <span> Type: </span>
            <span> {itemDetails.showType} </span>
          </div>
          <div>
            <span> Episodes: </span>
            <span> {itemDetails.episodeCount ?? "Unknown"} </span>
          </div>
        </div>
        <div>
          <div className={ classNames(clamped && styles.clamp) } ref={synopsisRef}>
            {itemDetails.synopsis}
          </div>
          {showButton && (
            <span className={styles.clamp_button} onClick={handleClickClamp}>
              Read {clamped ? "more" : "less"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ListItem);
