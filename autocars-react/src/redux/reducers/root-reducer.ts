import { combineReducers } from "@reduxjs/toolkit";
import topCars from "./car/topCarsSlice";

const reducer = combineReducers({ topCars });
export default reducer;
