import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Temperature {
	mode: boolean;
}

const initialState: Temperature = {
	mode: false,
};

const temperatureUnit = createSlice({
	name: "temperatureUnit",
	initialState,
	reducers: {
		setUnit(state, action: PayloadAction<boolean>) {
			state.mode = action.payload;
		},
	},
});

export const { setUnit } = temperatureUnit.actions;
export default temperatureUnit.reducer;
