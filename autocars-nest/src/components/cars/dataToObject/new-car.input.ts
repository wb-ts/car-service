import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(1000, {
    message: 'Too high price for daily Rent must be less or equal to 1000',
  })
  @Min(10, {
    message: 'Too low price for daily Rent must be greater or equal to 10',
  })
  dailyRent: number;

  @Field((type) => Int)
  @Max(10000, {
    message: 'Too high price for Monthly Rent must be less or equal to 10000',
  })
  @Min(1500, {
    message: 'Too low price for Monthly Rent must be greater or equal to 1500',
  })
  monthlyRent: number;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field()
  image: string;
}
