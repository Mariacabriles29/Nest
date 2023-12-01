import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCartDto, UpdateCartDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
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
  //creando un nuevo carro
  create(CreateCartDto: CreateCartDto) {
    const car: Car = {
      id: uuid(),
      ...CreateCartDto,
    };

    this.cars.push(car);
    return car;
  }

  update(id: string, updateCartDto: UpdateCartDto) {
    let cardDB = this.findByOneById(id);
    if (updateCartDto.id && updateCartDto.id !== id)
      throw new BadRequestException(`card id is not valid`);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        cardDB = {
          ...cardDB,
          ...updateCartDto,
          id,
        };
        return cardDB;
      }
      return car;
    });

    return cardDB;
  }

  delete(id: string) {
    const car = this.findByOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
