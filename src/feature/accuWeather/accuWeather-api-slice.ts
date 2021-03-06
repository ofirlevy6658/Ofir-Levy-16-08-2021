import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.REACT_APP_API_KEY2;

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://dataservice.accuweather.com",
	}),
	endpoints(builder) {
		return {
			fetchCityKey: builder.query<any, string>({
				query(city = "tel aviv") {
					return `/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`;
				},
			}),
			fetchCurrentWeather: builder.query<any, string>({
				query(cityId = "215854") {
					return `/currentconditions/v1/${cityId}?apikey=${API_KEY}`;
				},
			}),
			fetch5day: builder.query<any, string>({
				query(cityId) {
					return `/forecasts/v1/daily/5day/${cityId}?apikey=${API_KEY}`;
				},
			}),
		};
	},
});

export const {
	useFetchCityKeyQuery,
	useFetchCurrentWeatherQuery,
	useFetch5dayQuery,
} = apiSlice;
