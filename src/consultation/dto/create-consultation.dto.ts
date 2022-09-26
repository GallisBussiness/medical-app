import { IsArray, IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";
import { Traitement } from "src/traitement/entities/traitement.entity";

export class CreateConsultationDto {
  @IsString({message:"date de consultation invalid !"})
  dateDeConsultation: string;

  @IsNumber()
  poids: number;

  @IsString({message:"tension invalid !"})
  tension: string;

  @IsString({message:"temperature invalid !"})
  temperature: string;

  @IsString({message:"poule invalid !"})
  poule: string;

  @IsString({message:"glycemie invalid !"})
  glycemie: string;

  @IsString({message:"corps cetonique invalid !"})
  corps_cetonique: string;

  @IsString({message:"autres invalid !"})
  autres: string;

  @IsOptional()
  @IsString({message:"examen invalid !"})
  examen: string;

  @IsArray({message:"traitement invalid !"})
  traitement: Traitement[];

  @IsString({message:"bilan invalid !"})
  bilan: string;

  @IsString({message:"prochain invalid !"})
  prochain_rv: string;

  @IsString({message:"referenece invalid !"})
  reference: string;

  @IsString({message:"plainte du jour invalid !"})
  plainte_du_jour: string;

  @IsString({message:"type invalid !"})
  type: string;

  @IsOptional()
  @IsNumber()
  numero: string;

  @IsMongoId()
  etudiant: string;

  @IsMongoId()
  user: string;
}
