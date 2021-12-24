export interface IAnimeListDetails {
	mal_id: number;
	url: string;
	image_url: string;
	title: string;
	airing: boolean;
	synopsis: string;
	type: string;
	episodes: number;
	score: number;
	start_date: Date;
	end_date: Date;
	members: number;
	rated: string;
};

export interface IAnimeListResponse {
	request_hash: string;
	request_cached: boolean;
	request_cache_expiry: number;
	results: IAnimeListDetails[];
	last_page: number;
}


export interface IAnimeListResponseError {
	status: number;
	type: string;
	message: string;
	error: string;
	report_url: string;
};