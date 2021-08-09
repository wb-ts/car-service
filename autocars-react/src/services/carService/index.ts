import { apolloClient } from "../../graphql/graphql";
import { GET_ALL_CARS } from "./queries";
import { GetAllCars_cars } from "./__generated__/GetAllCars";

class CarService {
  public async getAllCars(): Promise<GetAllCars_cars> {
    const { data } = await apolloClient
      .query({ query: GET_ALL_CARS })
      .catch((err) => {
        throw err;
      });

    if (!data) return [] as any;

    return data.cars as GetAllCars_cars;
  }
}

export default new CarService();
