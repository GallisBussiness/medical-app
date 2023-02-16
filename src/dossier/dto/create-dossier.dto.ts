import { IsMongoId, IsOptional, IsString } from 'class-validator';
export class CreateDossierDto {
    @IsOptional()
    @IsString()
    groupe_sanguin: string;
  
    @IsOptional()
    @IsString()
    poids: string;

    @IsOptional()
    @IsString()
    taille: string;
  
    @IsOptional()
    @IsString()
    handicap_particulier: string;
  
    @IsOptional()
    @IsString()
    maladie_chronique: string;
  
    @IsOptional()
    @IsString()
    allergies: string;
  
    @IsOptional()
    @IsString()
    antecedants_medicaux: string;

    @IsMongoId()
    etudiant: string;

}
