import { IsMongoId, IsNumber, IsString } from 'class-validator';
export class CreateDossierDto {
    @IsString()
    groupe_sanguin: string;
  
    @IsNumber()
    poids: number;
  
    @IsString()
    handicap_particulier: string;
  
    @IsString()
    maladie_chronique: string;
  
    @IsString()
    allergies: string;
  
    @IsString()
    antecedant_medicaux: string;
}
