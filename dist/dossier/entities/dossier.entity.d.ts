/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-paginate-v2" />
import { Document } from 'mongoose';
import { Etudiant } from 'src/etudiant/entities/etudiant.entity';
export declare type DossierDocument = Dossier & Document;
export declare class Dossier {
    groupe_sanguin: string;
    poids: string;
    taille: string;
    handicap_particulier: string;
    maladie_chronique: string;
    allergies: string;
    antecedants_medicaux: string;
    etudiant: Etudiant;
}
export declare const DossierSchema: import("mongoose").Schema<Dossier, import("mongoose").Model<Dossier, any, any, any, any>, {}, {}, {}, {}, "type", Dossier>;
