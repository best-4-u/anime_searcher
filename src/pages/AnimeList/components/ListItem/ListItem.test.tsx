import { create } from "react-test-renderer";
import ListItem from "./ListItem";

import { render, screen } from "@testing-library/react";

describe("List Item component", () => {
  const date = new Date();

  const anime = {
    id: "1",
    type: "anime",
    attributes: {
      createdAt: date,
      updatedAt: date,
      slug: "one-piece",
      synopsis: 'Gol D. Roger was known as the "Pirate King,"',
      description: 'Gol D. Roger was known as the "Pirate King,"',
      coverImageTopOffset: 50,
      canonicalTitle: "One Piece",
      abbreviatedTitles: ["ワンピース"],
      averageRating: "83.1",
      userCount: 186101,
      favoritesCount: 6578,
      startDate: "1999-10-20",
      endDate: null,
      nextRelease: date,
      popularityRank: 14,
      ratingRank: 33,
      ageRating: "PG",
      ageRatingGuide: "Teens 13 or older",
      subtype: "TV",
      status: "current",
      tba: null,
      posterImage: {
        tiny: "https://media.kitsu.io/anime/poster_images/12/tiny.jpg",
        large: "https://media.kitsu.io/anime/poster_images/12/large.jpg",
        small: "https://media.kitsu.io/anime/poster_images/12/small.jpg",
        medium: "https://media.kitsu.io/anime/poster_images/12/medium.jpg",
        original: "https://media.kitsu.io/anime/poster_images/12/original.png",
      },
      coverImage: {
        tiny: "https://media.kitsu.io/anime/12/cover_image/tiny-cd1b0729d5c15400bfa2441ea3751e86.jpeg",
        large:
          "https://media.kitsu.io/anime/12/cover_image/large-3e72f400a87b5241780c5082f0582611.jpeg",
        small:
          "https://media.kitsu.io/anime/12/cover_image/small-8d0cbc39cac65d5d7c4db5f5b3742ae7.jpeg",
        original:
          "https://media.kitsu.io/anime/12/cover_image/21ecb556255bd46b95aea4779d19789f.jpg",
      },
      episodeCount: null,
      episodeLength: 24,
      totalLength: 27960,
      youtubeVideoId: "CmTeYj2FmRc",
      showType: "TV",
      nsfw: false,
    },
  };

  it("shows correctly item", () => {
    const fn = jest.fn();
    const tree = create(
      <ListItem itemDetails={anime.attributes} clickHandler={fn} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("correctly handle click", () => {
    const fn = jest.fn();
    render(<ListItem itemDetails={anime.attributes} clickHandler={fn} />);

    expect(fn).toBeCalledTimes(0);

    const link = screen.getByRole("button");
    link.click();

    expect(fn).toBeCalledTimes(1);
  });
});
