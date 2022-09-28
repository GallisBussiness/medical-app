import {IsMongoId, IsString } from "class-validator";

export class CreateBulletinDto {
  @IsString()
  examensDemandes: string;

  @IsString()
  service: string;

  @IsMongoId()
  etablissement: string;

  @IsString()
  date: string;

  @IsMongoId()
  etudiant: string;

  @IsMongoId()
  user: string;
}
