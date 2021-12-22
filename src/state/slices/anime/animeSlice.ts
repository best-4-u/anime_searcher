import { 
    createSlice, 
    PayloadAction, 
    createAsyncThunk,
    ActionReducerMapBuilder
} from '@reduxjs/toolkit';

import { IAnimeListDetails } from '../../../models/animeList/IAnimeListDetails';

export enum Loading {
    IDLE,
    PENDING,
    FAILED,
    SUCCEEDED
};

interface IInitialState {
    list: IAnimeListDetails[],
    loading: Loading
};

const initialState: IInitialState = {
    list: [],
    loading: Loading.IDLE
};

interface IError {
    message: string
}

export const fetchAnimeList = createAsyncThunk<IAnimeListDetails[], null, { rejectValue: IError } >(
    'animeList/fetchData',
    async (_, { rejectWithValue }) => {
        if (true) {
            return rejectWithValue({ message: '312321' })
        }
        return []
    }
)

const animeSlice = createSlice({
    name: 'animeList',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<IInitialState>) => {
        builder.addCase(fetchAnimeList.pending, (state: IInitialState) => {
            state.loading = Loading.PENDING
        });

        builder.addCase(fetchAnimeList.fulfilled, (state: IInitialState, action: PayloadAction<IAnimeListDetails[]>) => {
            state.list.push(...action.payload)
        });

        builder.addCase(fetchAnimeList.rejected, (state: IInitialState) => {

        });
    }
})

export default animeSlice.reducer