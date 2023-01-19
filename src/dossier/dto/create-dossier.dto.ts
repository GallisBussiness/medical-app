import { IsMongoId, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateDossierDto {
    @IsString()
    groupe_sanguin: string;
  
    @IsString()
    poids: string;

    @IsString()
    taille: string;
  
    @IsString()
    handicap_particulier: string;
  
    @IsString()
    maladie_chronique: string;
  
    @IsString()
    allergies: string;
  
    @IsString()
    antecedants_medicaux: string;

    @IsMongoId()
    etudiant: string;

}
