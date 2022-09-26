import { IsNumber, IsString } from "class-validator";

export class CreateTraitementDto {
    @IsString()
    medicament: string;

    @IsNumber()
    nombre: number;

    @IsString()
    frequence: string;
}
