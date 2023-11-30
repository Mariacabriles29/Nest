import { IsString } from 'class-validator';

export class CreateCartDto {
  @IsString()
  readonly brand: string;
  @IsString()
  readonly model: string;
}
