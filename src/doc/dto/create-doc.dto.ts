import { IsMongoId, IsString } from "class-validator";

export class CreateDocDto {
    @IsString()
    nom: string;

    @IsMongoId()
    dossier: string;
}
