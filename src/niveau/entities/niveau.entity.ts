import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type NiveauDocument = Niveau & Document;

@Schema({ timestamps: true })
export class Niveau {
    @Prop({type: String, required: true, unique: true})
    nom: string;
}

export const NiveauSchema = SchemaFactory.createForClass(Niveau);