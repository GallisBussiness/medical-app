import { IsString } from 'class-validator';

export class CreateUfrDto {
  @IsString()
  nom: string;

  @IsString()
  pseudo: string;
}
