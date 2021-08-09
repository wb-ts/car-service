import { Repository } from 'typeorm';
import { NewCarInput } from './dataToObject/new-car.input';
import { Car } from './entities/car';
export declare class CarsService {
    private carRepository;
    constructor(carRepository: Repository<Car>);
    getAllCars(): Promise<Car[]>;
    addCar(newCarData: NewCarInput): Promise<Car>;
}
