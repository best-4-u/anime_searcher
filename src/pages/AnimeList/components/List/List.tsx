import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { IAnimeDetails } from "../../../../models/animeDetails/IAnimeDetails";

import ListItem from "../ListItem/ListItem";

interface props {
  list: IAnimeDetails[];
}

const List: FC<props> = ({ list }) => {
  let navigate = useNavigate();

  const onClickItem = (slug: string) => {
    navigate(`${slug}`);
  };

  return (
    <div>
      {list.map((item) => {
        return (
          <ListItem
            key={item.id}
            itemDetails={item.attributes}
            clickHandler={onClickItem}
          />
        );
      })}
    </div>
  );
};

export default List;
