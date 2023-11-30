import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCartDto } from './dto/create-car.dto';
import { UpdateCartDto } from './dto/update-car.dto';

@Controller('cars')
//pongo el validationPipe a nivel del controlador oara que lo tengan todos mis metodos
//@UsePipes(ValidationPipe)
export class CarsController {
  //creo el constructor para aplicar inyecccion de dependencias del cars service
  constructor(private readonly CarsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.CarsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe()) id: string) {
    console.log({ id });
    return this.CarsService.findByOneById(id);
  }
  @Post()
  createCar(@Body() createCardDto: CreateCartDto) {
    return this.CarsService.create(createCardDto);
  }
  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCartDto,
  ) {
    return this.CarsService.update(id, updateCarDto);
  }
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
