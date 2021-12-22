export interface IFrom {
    day: number;
    month: number;
    year: number;
}

export interface ITo {
    day: number;
    month: number;
    year: number;
}

export interface IProp {
    from: IFrom;
    to: ITo;
}

export interface IAired {
    from: Date;
    to: Date;
    prop: IProp;
    string: string;
}

export interface IAdaptation {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface ISideStory {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface ISummary {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface IRelated {
    Adaptation: IAdaptation[];
    Sidestory: ISideStory[];
    Summary: ISummary[];
}

export interface IProducer {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface ILicensor {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface IStudio {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface IGenre {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface ITheme {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface IExternalLink {
    name: string;
    url: string;
}

export interface IAnimeDetails {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    mal_id: number;
    url: string;
    image_url: string;
    trailer_url: string;
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: any[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: IAired;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    premiered: string;
    broadcast: string;
    related: IRelated;
    producers: IProducer[];
    licensors: ILicensor[];
    studios: IStudio[];
    genres: IGenre[];
    explicit_genres: any[];
    demographics: any[];
    themes: ITheme[];
    opening_themes: string[];
    ending_themes: string[];
    external_links: IExternalLink[];
}
