import {
  IsArray,
  IsEmail,
  IsMongoId,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { CreateDossierDto } from 'src/dossier/dto/create-dossier.dto';

export class CreateEtudiantDto {
  @IsString()
  nce: string;

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

  @IsMongoId()
  formation: string;

  @IsOptional()
  @IsObject()
  dossier: CreateDossierDto;

  @IsOptional()
  @IsArray()
  files: string[];
}
