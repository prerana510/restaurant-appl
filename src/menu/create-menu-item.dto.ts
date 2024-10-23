// src/menu/dto/create-menu-item.dto.ts
import { IsString, IsNumber } from 'class-validator';

export class CreateMenuItemDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;
}
