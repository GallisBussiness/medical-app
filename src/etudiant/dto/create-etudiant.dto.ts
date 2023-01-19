import {
  IsArray,
  IsEmail,
  IsMongoId,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateEtudiantDto {
  @IsString()
  nce: string;

  @IsString()
  ine: string;

  @IsString()
  prenom: string;

  @IsString()
  nom: string;

  @IsString()
  sexe: string;

  @IsString()
  dateDeNaissance: string;

  @IsString()
  lieuDeNaissance: string;

  @IsString()
  adresse: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsPhoneNumber('SN')
  @IsOptional()
  telephone: string;

  @IsString()
  formation: string;
}
