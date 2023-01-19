import {IsMongoId, IsString } from "class-validator";

export class CreateBulletinDto {
  @IsString()
  examensDemandes: string;

  @IsString()
  service: string;

  @IsString()
  etablissement: string;

  @IsString()
  date: string;

  @IsMongoId()
  dossier: string;

  @IsMongoId()
  user: string;
}
