import { AxiosResponse } from 'axios';

import http from '../http_axios';
import { IAnimeListResponse } from '../../models/animeList/IAnimeListDetails';
import env from '../../utils/config/env.config';

const url = env.animeDbUrl + '/v3';

class AnimeDataService {
    getAll(page: number): Promise<AxiosResponse<IAnimeListResponse, any>> {
        return http
            .get<IAnimeListResponse>(`${url}/search/anime?q=&order_by=rating&page=${page}`);
    }
}

export default new AnimeDataService();