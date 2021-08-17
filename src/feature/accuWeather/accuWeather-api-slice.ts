import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_KEY = "5QeQ8tV4KVVB6zA3a82qAtkZmwRTWvrg";
const API_KEY = "TdqIohPJNDwuMXd3AuZuZ0JsckDVQ0rL";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://dataservice.accuweather.com",
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
