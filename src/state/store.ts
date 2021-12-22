// import { configureStore } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import animeSliceReducer from './slices/anime/animeSlice'

const store = configureStore({
  reducer: {
    animeList: animeSliceReducer
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store