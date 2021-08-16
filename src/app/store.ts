import { configureStore } from "@reduxjs/toolkit";
import termSlice from "../feature/search-term/search-term-slice";
import { apiSlice } from "../feature/accuWeather/accuWeather-api-slice";

export const store = configureStore({
	reducer: {
		search: termSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(apiSlice.middleware);
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
