import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DarkMode {
	mode: boolean;
}

const initialState: DarkMode = {
	mode: false,
};

const darkModeSlice = createSlice({
	name: "darkMode",
	initialState,
	reducers: {
		setMode(state, action: PayloadAction<boolean>) {
			state.mode = action.payload;
		},
	},
});

export const { setMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;

// const dispatch = useAppDispatch();
// const mode = useAppSelector((state) => state.darkMode.mode);
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { setMode } from "../../feature/dark-mode/dark-mode-slice";
