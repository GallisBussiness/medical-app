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
import { Document } from 'mongoose';
import { Dossier } from 'src/dossier/entities/dossier.entity';
import { User } from 'src/user/entities/user.entity';
export declare type ConsultationDocument = Consultation & Document;
export declare class Consultation {
    dateDeConsultation: string;
    poids: string;
    taille: string;
    tension: string;
    temperature: string;
    poule: string;
    glycemie: string;
    corps_cetonique: string;
    autres: string;
    diagnostique: string;
    examen: string;
    bilan: string;
    prochain_rv: string;
    reference: string;
    code: string;
    plainte_du_jour: string;
    type: string;
    traitement: any[];
    dossier: Dossier;
    user: User;
}
export declare const ConsultationSchema: import("mongoose").Schema<Consultation, import("mongoose").Model<Consultation, any, any, any, any>, {}, {}, {}, {}, "type", Consultation>;
