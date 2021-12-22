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
}