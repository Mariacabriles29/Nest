import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }
  findByOneById(id: string) {
    //busco el car.id cuyo car sea ===id
    const car = this.cars.find((car) => car.id === id);
    //aplico una exception
    if (!car) throw new NotFoundException(`Car with id '${uuid()}' not found`);

    return car;
  }
}
