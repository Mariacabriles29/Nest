import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  // lo voy a usar para cargar algunos datos
  populateDB() {
    //CARS_SEED;
    //BRANDS_SEED;

    return 'Seed executed';
  }
}
