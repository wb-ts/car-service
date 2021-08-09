import { Module } from '@nestjs/common';
import { CarsModules } from './cars/cars.module';

@Module({ imports: [CarsModules] })
export class ComponentsModule {}
