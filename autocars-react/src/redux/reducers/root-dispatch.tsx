import { Dispatch } from "@reduxjs/toolkit";
import { setTopCars } from "./car/topCarsSlice";
import { GetAllCars_cars } from "../../services/carService/__generated__/GetAllCars";

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCarsDispatch: (cars: GetAllCars_cars) => dispatch(setTopCars(cars)),
});

export default actionDispatch;
