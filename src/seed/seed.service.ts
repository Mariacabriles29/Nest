import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  // lo voy a usar para cargar algunos datos
  populateDB() {
    return 'SEED executed';
  }
}
