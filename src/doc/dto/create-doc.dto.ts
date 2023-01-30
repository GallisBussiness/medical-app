import { IsMongoId, IsString } from "class-validator";

export class CreateDocDto {
    @IsString()
    nom: string;

    @IsString()
    type: string;

    @IsMongoId()
    dossier: string;
}
