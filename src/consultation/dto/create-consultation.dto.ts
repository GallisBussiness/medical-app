import { IsArray, IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";
import { Traitement } from "src/traitement/entities/traitement.entity";

export class CreateConsultationDto {
  @IsString({message:"date de consultation invalid !"})
  dateDeConsultation: string;

  @IsOptional()
  @IsString()
  poids: number;

  @IsOptional()
  @IsString()
  taille: number;

  @IsOptional()
  @IsString({message:"tension invalid !"})
  tension: string;

  @IsOptional()
  @IsString({message:"temperature invalid !"})
  temperature: string;

  @IsOptional()
  @IsString({message:"poule invalid !"})
  poule: string;

  @IsOptional()
  @IsString({message:"glycemie invalid !"})
  glycemie: string;

  @IsOptional()
  @IsString({message:"corps cetonique invalid !"})
  corps_cetonique: string;

  @IsOptional()
  @IsString({message:"autres invalid !"})
  autres: string;

  @IsOptional()
  @IsString({message:"examen invalid !"})
  examen: string;

  @IsOptional()
  @IsArray({message:"traitement invalid !"})
  traitement: any[];

  @IsOptional()
  @IsString({message:"bilan invalid !"})
  bilan: string;

  @IsOptional()
  @IsString({message:"prochain invalid !"})
  prochain_rv: string;

  @IsOptional()
  @IsString({message:"referenece invalid !"})
  reference: string;

  @IsOptional()
  @IsString({message:"diagnostique invalid !"})
  diagnostique: string;

  @IsOptional()
  @IsString({message:"plainte du jour invalid !"})
  plainte_du_jour: string;

  @IsString({message:"type invalid !"})
  type: string;

  @IsOptional()
  @IsNumber()
  numero: string;

  @IsMongoId()
  dossier: string;

  @IsMongoId()
  user: string;
}
