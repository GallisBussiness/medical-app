import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Dossier } from "src/dossier/entities/dossier.entity";

export type DocDocument = Doc & Document;

@Schema({timestamps: true})
export class Doc {
    @Prop({type: String, required: true})
    nom: string;

    @Prop({type: Types.ObjectId, ref: Dossier.name, required: true, autopopulate: true})
    dossier: string;
}


export const DocSchema = SchemaFactory.createForClass(Doc);