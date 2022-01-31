export interface IAnimeListResponseErrorType {
  code: string;
  detail: string;
  status: string;
  title: string;
}

export interface IAnimeListResponseError {
  errors: IAnimeListResponseErrorType[];
}
