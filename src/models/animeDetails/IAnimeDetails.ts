export interface ICoverImage {
  tiny: string;
  large: string;
  small: string;
  original: string;
}

export interface IPosterImage {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
}

export interface IAnimeListDetailsAttributes {
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  synopsis: string;
  description: string;
  coverImageTopOffset: number;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate: string | null;
  nextRelease?: Date | null;
  popularityRank: number;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  subtype: string;
  status: string;
  tba: string | null;
  posterImage: IPosterImage;
  coverImage: ICoverImage;
  episodeCount?: number | null;
  episodeLength?: number | null;
  totalLength: number;
  youtubeVideoId: string;
  showType: string;
  nsfw: boolean;
}

export interface IAnimeDetails {
  id: string;
  type: string;
  attributes: IAnimeListDetailsAttributes;
}
