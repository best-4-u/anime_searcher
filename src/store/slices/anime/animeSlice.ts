import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import animeDataService from "../../../api/services/anime.service";
import { IAnimeDetails } from "../../../models/animeDetails/IAnimeDetails";
import { IAnimeListResponseError } from "../../../models/animeDetails/IAnimeListResponseError";

export enum Loading {
  IDLE,
  PENDING,
  FAILED,
  SUCCEEDED,
}

interface IInitialState {
  list: IAnimeDetails[];
  loading: Loading;
  errorText: string;
  page: number;
}

const initialState: IInitialState = {
  list: [],
  loading: Loading.IDLE,
  errorText: "",
  page: 0,
};

interface IError {
  message: string;
}

export const fetchAnimeList = createAsyncThunk<
  IAnimeDetails[],
  number,
  {
    rejectValue: IError;
  }
>("animeList/fetchData", async (page: number, { rejectWithValue }) => {
  const res = await animeDataService
    .getAll(page)
    .catch((err: Error | AxiosError<IAnimeListResponseError>) => {
      let text: string = "";
      if (axios.isAxiosError(err)) {
        text = err.response?.data?.errors[0].detail || "error";
      } else {
        text = err.message;
      }
      throw rejectWithValue({ message: text });
    });
  return res.data.data;
});

const animeSlice = createSlice({
  name: "animeList",
  initialState,
  reducers: {
    clearList(state: IInitialState): void {
      state.list = [];
      state.page = 1;
    },
    setPage(state: IInitialState, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IInitialState>) => {
    builder
      .addCase(fetchAnimeList.pending, (state: IInitialState) => {
        state.loading = Loading.PENDING;
      })
      .addCase(
        fetchAnimeList.fulfilled,
        (state: IInitialState, action: PayloadAction<IAnimeDetails[]>) => {
          state.list.push(...action.payload);
          state.loading = Loading.SUCCEEDED;
        }
      )
      .addCase(fetchAnimeList.rejected, (state: IInitialState, action) => {
        state.loading = Loading.FAILED;
        state.errorText = action.payload?.message || "";
      });
  },
});

export const { clearList, setPage } = animeSlice.actions;

export default animeSlice.reducer;
