import { IsString } from "class-validator";

export class CreateNiveauDto {
    @IsString()
    nom: string;
  
}
