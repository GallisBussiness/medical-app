import { IsMongoId, IsString } from 'class-validator';

export class CreateFormationDto {
  @IsString()
  nom: string;

  @IsString()
  niveau: string;

  @IsMongoId()
  departement: string;
}
