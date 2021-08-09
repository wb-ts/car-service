import React, { useEffect } from "react";
import carService from "services/carService";
import CarCard from "../CarCard";
import { useDispatch, useSelector } from "react-redux";
import actionDispatch from "redux/reducers/root-dispatch";
import "./FeaturedCars.css";
import { selectTopCars } from "redux/reducers/car/topCarsSlice";

const FeaturedCars = () => {
  const { setTopCarsDispatch } = actionDispatch(useDispatch());

  const fetchCars = async () => {
    const cars = await carService
      .getAllCars()
      .catch((err) => console.log("Error", err));

    if (cars) setTopCarsDispatch(cars);
  };

  const { cars } = useSelector(selectTopCars());
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="featuredCars">
      <h3 className="featuredCars__title">Top Rated</h3>
      <h2 className="featuredCars__heading">Explore Our Top Deals</h2>
      <div className="featuredCars__cars">
        {cars?.map((car) => (
          <CarCard key={car?.id} {...car} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCars;
