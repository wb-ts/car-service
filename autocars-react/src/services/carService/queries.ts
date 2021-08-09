import { gql } from "@apollo/client";

export const GET_ALL_CARS = gql`
  query GetAllCars {
    cars {
      id
      name
      mileage
      image
      dailyRent
      monthlyRent
      gas
      gearType
    }
  }
`;
