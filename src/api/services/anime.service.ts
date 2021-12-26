import { AxiosResponse } from 'axios';

import http from '../http_axios';
import { IAnimeListResponse } from '../../models/animeList/IAnimeListDetails';
import env from '../../utils/config/env.config';

const url = env.animeDbUrl + '/edge'

class AnimeDataService {
    getAll(page: number): Promise<AxiosResponse<IAnimeListResponse, any>> {
        return http
            .get<IAnimeListResponse>(`${url}/anime?page[limit]=10&page[offset]=${page * 10}`);
    }
}

export default new AnimeDataService();