import { createSlice } from "@reduxjs/toolkit";
import { GetAllCars_cars } from "../../../services/carService/__generated__/GetAllCars";

export interface ITopCarsSlice {
  cars: GetAllCars_cars[];
}

interface ITopCarsState {
  topCars: ITopCarsSlice;
}

const initialState: ITopCarsSlice = { cars: [] };

const topCarsSlice = createSlice({
  name: "topCars",
  initialState,
  reducers: {
    setTopCars: (state, { payload }) => {
      state.cars = payload;
    },
  },
});

export const selectTopCars = () => (state: ITopCarsState) => state.topCars;
export const { setTopCars } = topCarsSlice.actions;
export default topCarsSlice.reducer;
