import { IsMongoId, IsNumber, IsString } from "class-validator";

export class CreateConsultationDto {
  @IsString()
  dateDeConsultation: string;

  @IsNumber()
  poids: number;

  @IsString()
  tension: string;

  @IsString()
  temperature: string;

  @IsString()
  poule: string;

  @IsString()
  glycemie: string;

  @IsString()
  corps_cetonique: string;

  @IsString()
  autres: string;

  @IsString()
  examen: string;

  @IsString()
  traitement: string;

  @IsString()
  bilan: string;

  @IsString()
  prochain_rv: string;

  @IsString()
  reference: string;

  @IsString()
  plainte_du_jour: string;

  @IsString()
  type: string;

  @IsNumber()
  numero: string;

  @IsMongoId()
  etudiant: string;

  @IsMongoId()
  user: string;
}
