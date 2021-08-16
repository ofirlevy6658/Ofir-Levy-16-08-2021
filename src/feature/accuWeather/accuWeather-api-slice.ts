import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "5QeQ8tV4KVVB6zA3a82qAtkZmwRTWvrg";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://dataservice.accuweather.com/locations/v1",
	}),
	endpoints(builder) {
		return {
			fetchCityKey: builder.query<any, string>({
				query(city) {
					return `/cities/autocomplete?apikey=${API_KEY}&q=${city}`;
				},
			}),
			fetchCurrentWeather: builder.query<any, string>({
				query(cityId) {
					return `/${cityId}?apikey=${API_KEY}`;
				},
			}),
			fetch5day: builder.query<any, string>({
				query(cityId) {
					return `/daily/5day/${cityId}.json?apikey=${API_KEY}`;
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
