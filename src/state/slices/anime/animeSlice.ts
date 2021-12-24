import { 
    createSlice, 
    PayloadAction, 
    createAsyncThunk,
    ActionReducerMapBuilder
} from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import animeDataService from '../../../api/services/anime.service';
import { IAnimeListDetails, IAnimeListResponseError } from '../../../models/animeList/IAnimeListDetails';

export enum Loading {
    IDLE,
    PENDING,
    FAILED,
    SUCCEEDED
};

interface IInitialState {
    list: IAnimeListDetails[];
    loading: Loading;
    errorText: string;
};

const initialState: IInitialState = {
    list: [],
    loading: Loading.IDLE,
    errorText: ''
};

interface IError {
    message: string;
};

export const fetchAnimeList = createAsyncThunk<
    IAnimeListDetails[],
    number, 
    { 
        rejectValue: IError 
    } 
    >('animeList/fetchData',
    async (page: number, { rejectWithValue }) => {
        const res = await animeDataService
            .getAll(page)
            .catch((err: Error | AxiosError<IAnimeListResponseError> ) => {
                let text: string = '';
                if (axios.isAxiosError(err)) {
                    text = err.response?.data?.error || 'error';
                } else {
                    text = err.message;
                }
                throw rejectWithValue({ message: text });
            })
        return res.data.results;
    }
)

const animeSlice = createSlice({
    name: 'animeList',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<IInitialState>) => {
        builder
            .addCase(fetchAnimeList.pending, (state: IInitialState) => {
                state.loading = Loading.PENDING;
            })
            .addCase(fetchAnimeList.fulfilled, (state: IInitialState, action: PayloadAction<IAnimeListDetails[]>) => {
                console.log('action.payload', action.payload)
                state.list.push(...action.payload);
                state.loading = Loading.SUCCEEDED;
            })
            .addCase(fetchAnimeList.rejected, (state: IInitialState, action) => {
                state.loading = Loading.FAILED;
            });
    }
})

export default animeSlice.reducer;