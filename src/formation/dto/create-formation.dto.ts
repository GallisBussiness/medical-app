import { IsMongoId, IsString } from 'class-validator';

export class CreateFormationDto {
  @IsMongoId()
  niveau: string;

  @IsMongoId()
  departement: string;
}
