import { IsString } from 'class-validator';

export class CreateEtablissementDto {
  @IsString()
  nom: string;

  @IsString()
  pseudo: string;
}
