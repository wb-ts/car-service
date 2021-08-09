import { CarsService } from './cars.service';
export declare class CarsResolver {
    private carsService;
    constructor(carsService: CarsService);
    cars(): Promise<string>;
}
